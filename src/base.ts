import axios from "axios"

export abstract class Base {
    get(url: string) {
        return axios.get(url)
    }
    post(url: string, payload: any) {
        return axios.post(url, payload)
    }
}