import { IHpptRequest } from "../../types/IHttpRequest";
import { Plants } from "../../types/Plants";
import { httpRequest } from "../../utils/httpRequest";
import { CreatePayload, IPlantsService,CreateResponse, options, Pagination } from "../IPlants";

export class PlantsService implements IPlantsService {

  constructor(private httpRequest:IHpptRequest ){}

  async create(payload: CreatePayload): Promise< CreateResponse> {
 const response=    await this.httpRequest.post<Plants>("/plants", payload);
  return response
  }

  async getAll(props?: options): Promise<Pagination<Plants[]>> {
    const response = await this.httpRequest.get<Pagination<Plants[]>>(
      `/plants?_page=${props?.page || 1}&_per_page=${props?.perPape || 20}`,
    );
    return response.data;
  }

  async findById(id: string): Promise<Plants | null> {
    const response = await this.httpRequest.get<Plants | null>(`/plants/${id}`);

    return response.data;
  }
}
export const plantsService = new PlantsService(httpRequest);
