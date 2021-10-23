import axios from "axios"
import { IResponse } from "pro-web-common/dist/js/interfaces/IResponse"

export abstract class Base {
    get<T>(url: string) {
        return axios.get<T>(url)
    }
    post(url: string, payload: any) {
        return axios.post(url, payload)
    }
}