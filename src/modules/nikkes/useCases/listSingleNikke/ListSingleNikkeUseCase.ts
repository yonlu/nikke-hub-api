import { inject, injectable } from "tsyringe";
import INikkesRepository from "../../infra/repositories/INikkesRepository";
import NikkeMap from "../util/NikkeMap";

@injectable()
export class ListSingleNikkeUseCase {
  constructor(
    @inject("NikkesRepository")
    private readonly nikkesRepository: INikkesRepository
  ) {}

  async execute(name: string) {
    const nikke = await this.nikkesRepository.listSingleNikke(name);

    if (!nikke) {
      throw new Error(`Nikke with name: ${name} not found.`);
    }

    const formattedNikke = NikkeMap.toDTO(nikke);

    return formattedNikke;
  }
}
