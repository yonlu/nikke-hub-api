import { inject, injectable } from "tsyringe";
import INikkesRepository from "../../infra/repositories/INikkesRepository";
import NikkeMap from "../util/NikkeMap";

@injectable()
export class FilterNikkesUseCase {
  constructor(
    @inject("NikkesRepository")
    private readonly nikkesRepository: INikkesRepository
  ) {}

  async execute({ rarity, burst, code, weapon }: any) {
    const filteredNikkes = await this.nikkesRepository.filterNikkesByCriteria(
      rarity,
      burst,
      code,
      weapon
    );

    const filteredNikkesList = filteredNikkes?.map((nikke) =>
      NikkeMap.toDTO(nikke)
    );

    return filteredNikkesList;
  }
}
