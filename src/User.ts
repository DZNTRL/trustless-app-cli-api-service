import { IResponse } from "pro-web-common/dist/js/interfaces/IResponse"
import { Response } from "pro-web-common/dist/js/Response"
import { Base } from "./base"
import { Utils } from "./utils"

export class User extends Base {
    baseUrl: string
    constructor(baseUrl: string = "") {
        super()
        this.baseUrl = baseUrl
    }
    async checkUsernameUnique(username: string) {
        const result = (await this.get<IResponse<boolean>>(`${this.baseUrl}/api/user/unique/${username}`)).data
        const resp = Utils.transformRequest<boolean>(result)
        return resp

    }
    async requestLogin(username: string) {
        const result = (await this.get(`${this.baseUrl}/api/request-session/${username}`)).data as IResponse<string>
        const response = Utils.transformRequest<string>(result)
        return response
    }
    async login(username: string, challenge: string) {
        const result = (await this.post<IResponse<boolean>>(`${this.baseUrl}/api/login/`,  {username, password: challenge})).data
        const resp = Utils.transformRequest<boolean>(result)
        return resp
    }
    async createUser(username: string, publicKey: string) {
        return this.post(`${this.baseUrl}/api/user/`, {username, publicKey}) as unknown as Promise<IResponse<number>>
    }
}