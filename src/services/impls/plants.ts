import { IHpptRequest } from "../../types/IHttpRequest";
import { Plants } from "../../types/Plants";
import { httpRequest } from "../../utils/httpRequest";
import { CreatePayload, IPlantsService, options } from "../IPlants";

export class PlantsService implements IPlantsService {

  constructor(private httpRequest:IHpptRequest ){}

  async create(payload: CreatePayload): Promise<void> {
    await this.httpRequest.post("/plants", payload);
  }

  async getAll(props?: options): Promise<Plants[]> {
    const response = await this.httpRequest.get<Plants[]>(
      `/plants?_page=${props?.page || 1}&_per_page=${props?.perPape || 20}`,
    );

    return response.data;
  }

  async findById(id: number): Promise<Plants | null> {
    const response = await this.httpRequest.get<Plants | null>(`/plants/${id}`);

    return response.data;
  }
}
export const plantsService = new PlantsService(httpRequest);