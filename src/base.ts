import axios from "axios"

export abstract class Base {
    jwt: string | null = null
    baseUrl :string | null = null
    constructor(jwt: string, baseUrl: string) {
        this.jwt = jwt
        this.baseUrl = baseUrl
    }
    private createAxios() {
        return axios.create({
            headers: {
                authoriazation: this.jwt
            }
        })
    }
    get(url: string) {
        return this.createAxios().get
    }
    post(url: string, payload: any) {
        return this.createAxios().post(url, payload)
    }
}