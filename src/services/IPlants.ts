import { Plants } from "../types/Plants";

export type CreatePayload = Omit<Plants, "id">;

export type options = {
  page?: number;
  perPape?: number;
};

export type Pagination<T> = {
  first: number,
  prev: null,
  next: null,
  last: number,
  pages: number,
  items: number,
  data:T
}
export type CreateResponse = {
  status: number;
  data: Plants;
};



export interface IPlantsService {
  create(payload: CreatePayload): Promise<CreateResponse>;
  getAll(option: options): Promise<Pagination<Plants[]>>;
  findById(id: number): Promise<Plants | null>;
}
