import { IResponse } from "pro-web-common/dist/js/interfaces/IResponse"
import { Base } from "./base"

export class User extends Base {
    baseUrl: string
    constructor(baseUrl: string = "") {
        super()
        this.baseUrl = baseUrl
    }
    async checkUsernameUnique(username: string) {
        return this.get(`${this.baseUrl}/api/user/unique/${username}`) as unknown as Promise<IResponse<boolean>>        
    }
    async requestLogin(username: string) {
        return this.get(`${this.baseUrl}/request-session/${username}`) as unknown as Promise<IResponse<string>>
    }
    async login(username: string, challenge: string) {
        return this.post(`${this.baseUrl}/login/${username}`, {username, password: challenge}) as unknown as Promise<IResponse<boolean>>
    }
    async createUser(username: string, publicKey: string) {
        return this.post(`${this.baseUrl}/user/`, {username, publicKey}) as unknown as Promise<IResponse<number>>
    }
}