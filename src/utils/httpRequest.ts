import { bodyType, httpResponse, IHpptRequest, requestOptions } from "../types/IHttpRequest";

export class HttpRequest implements IHpptRequest {
  private baseUrl = "http://localhost:3000";

  async request<T>({ body, path, method }: requestOptions):Promise<httpResponse<T>> {
    let bodyParsed: undefined | string;

    if (body) {
      bodyParsed = JSON.stringify(body);
    }

    const request = await fetch(`${this.baseUrl}${path}`, {
      body: bodyParsed,
      method,
    });

      const data = await request.json();
      return {data:data,status:request.status}

  }

  async get<T>(path: string) {
    return this.request<T>({ path, method: "GET" });
  }

  async post<T>(path: string, body: bodyType) {
    return this.request<T>({ path, method: "POST", body });
  }
}

export const httpRequest = new HttpRequest();
