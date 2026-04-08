import { HTTPClient } from "./services/httpClient";

const http = new HTTPClient();

type JsonUser = {
    id: number;
    name: string;
    email: string;
};

async function main() {
    const res = await http.request<JsonUser[]>(
        "https://jsonplaceholder.typicode.com/users"
    );

    console.log(res);
}

main();