import $api from "../http";

export default class NewsService {
    static async createNews(data) {
        return await $api.post('/news', {
            ...data,
            "titleImageW": "01767685-af81-4d0e-a8f7-9840518b9510.webp",
            "forStudents": true,
            "forTeachers": true,
            "forPartners": true,
            "forBlog": false,
            "isAttached": false,
            "newsTags": []
        })
    }

    static async getAllNews() {
        return await $api.get('/news')
    }
}
