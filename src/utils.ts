import { Response } from "pro-web-common/dist/js/Response";
export class Utils {
    static transformRequest<T>(transform: Response<T>) {
        const resp = new Response<T>()
        resp.Data = transform.Data
        resp.Message = transform.Message
        resp.IsError = transform.IsError
        return resp
    }
}