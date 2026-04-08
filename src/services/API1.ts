import { HTTPClient } from "./httpClient";
import { User } from "../models/User";

export class JsonPlaceholderService {
    private http = new HTTPClient();

    async getUsuarios(): Promise<User[]> {
        const res = await this.http.request<{
            id: number;
            name: string;
            email: string;
        }[]>("https://jsonplaceholder.typicode.com/users");

        if (res.error || !res.data) {
            throw new Error(res.error || "Error desconocido");
        }

        return res.data.map((User) => ({
            id: User.id,
            nombre: User.name,
            email: User.email,
        }));
    }
}