import { User } from "./User"

export function createServices(baseUrl: string, jwt: string) {
    return {
        user: new User(jwt, baseUrl)
    }
}