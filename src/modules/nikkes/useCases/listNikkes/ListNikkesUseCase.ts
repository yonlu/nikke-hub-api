import { inject, injectable } from "tsyringe";
import INikkesRepository from "../../infra/repositories/INikkesRepository";

@injectable()
export class ListNikkesUseCase {
  constructor(
    @inject("NikkesRepository")
    private readonly nikkesRepository: INikkesRepository
  ) {}

  async execute() {
    const nikkes = await this.nikkesRepository.listNikkes();

    return nikkes;
  }
}
