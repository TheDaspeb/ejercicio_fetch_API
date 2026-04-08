import { ApiResponse } from "../models/ApiResponse";

export class HTTPClient {
    async request<T>(url: string): Promise<ApiResponse<T>> {
        try {
            const res = await fetch(url);

            if (!res.ok) {
                return {
                    data: null,
                    error: `Error a la hora de hacer la petición ${res.statusText}`,
                    status: res.status
                };
            }

            const body: unknown = await res.json();

            if (body === null || body === undefined) {
                return {
                    data: null,
                    error: `Error en la petición`,
                    status: res.status
                };
            }

            return {
                data: body as T,
                error: null,
                status: res.status
            };
        } catch (error) {
            return {
                data: null,
                error: `Fallo la conexión, compre Wi-Fi tacaño jajaja`,
                status: 500
            };
        }
    }
}

