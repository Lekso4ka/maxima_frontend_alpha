import $api from '../http'
import {store} from "../store";
import {login} from "../store/features/user/userSlice";

export default class AuthService {
    static async login(data) {
        return await $api.post('/auth/login', data)
            .then(r => {
                store.dispatch(login(r.data.accessToken.token))
                localStorage.setItem('refreshToken', r.data.refreshToken.token)
                localStorage.setItem('token', r.data.accessToken.token)
            })
    }

    static async checkToken(token) {
        return await $api.post(`/auth/validate?token=${token}`)
    }

    static async getUserDto() {
        return await $api.get('/users/me')
    }
}
