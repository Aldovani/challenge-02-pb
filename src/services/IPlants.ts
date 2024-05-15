import { Plants } from "../types/Plants";

export type CreatePayload = Omit<Plants, "id">;

export type options = {
  page?: number;
  perPape?: number;
};

export interface IPlantsService {
  create(payload: CreatePayload): Promise<void>;
  getAll(option: options): Promise<Plants[]>;
  findById(id: number): Promise<Plants | null>;
}
