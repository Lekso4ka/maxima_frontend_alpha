import axios from 'axios'

export const API_URL = 'https://backend.learn.maxima.school'

const $api = axios.create({
    // withCredentials: true,
    baseURL: API_URL,
})

$api.interceptors.request.use(
    async (req) => {
        // запросы - на которые не нужен токен
        if (req.url?.includes('auth')) {
            return req
        }

        const token = localStorage.getItem('token')
        req.headers = {
            Authorization: `Bearer ${token}`,
        }
        return req
    },

    (error) => {
        return Promise.reject(error)
    },
)

$api.interceptors.response.use(
    (res) => {
        return res
    },
    async (error) => {
        const originalRequest = error?.config

        if (
            error?.response?.status === 401 ||
            (error?.response?.status === 400 &&
                error?.response?.data.errorCode === '005' &&
                error?.response?.data.exceptionMessage === 'Invalid token')
        ) {
            originalRequest._isRetry = true
            try {
                const refreshToken = encodeURIComponent(`${localStorage.getItem('refreshToken')}`)
                try {
                    const response = await $api.post(
                        `${API_URL}/auth/refresh?refresh-token=${refreshToken}`,
                    )
                    // обновляем локальное хранилице с токенами
                    if (
                        error?.response?.status === 400 &&
                        error?.response?.data.errorCode === '005' &&
                        error?.response?.data.exceptionMessage === 'Invalid token'
                    ) {
                        originalRequest.url =
                            originalRequest.url.split('=')[0] +
                            '=' +
                            response.data.accessToken.token
                    }
                    localStorage.setItem('token', response.data.accessToken.token)

                    localStorage.setItem('refreshToken', response.data.refreshToken.token)
                    return $api(originalRequest)
                } catch (error) {
                    return Promise.reject(error)
                }
            } catch (error) {
                return Promise.reject(error)
            }
        }

        return Promise.reject(error)
    },
)

export default $api
