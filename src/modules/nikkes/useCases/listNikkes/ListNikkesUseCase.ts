import { inject, injectable } from "tsyringe";
import INikkesRepository from "../../infra/repositories/INikkesRepository";
import NikkeMap from "../util/NikkeMap";

@injectable()
export class ListNikkesUseCase {
  constructor(
    @inject("NikkesRepository")
    private readonly nikkesRepository: INikkesRepository
  ) {}

  async execute() {
    const nikkes = await this.nikkesRepository.listNikkes();

    const nikkesList = nikkes.map((nikke) => NikkeMap.toDTO(nikke));

    return nikkesList;
  }
}
