export type bodyType = string | number | object | undefined;

export type requestOptions = {
  path: string;
  method: "POST" | "GET";
  body?: bodyType;
};

export type httpResponse<T = undefined> = {
  status: number;
  data: T;
};

export type getOptions = Pick<requestOptions, "path">;
export type postOptions = Omit<requestOptions, "path">;

export interface IHpptRequest {
  request<T>(option: requestOptions): Promise<httpResponse<T>>;
  get<T>(path: string): Promise<httpResponse<T>>;
  post<T>(path: string, option?: bodyType): Promise<httpResponse<T>>;
}
