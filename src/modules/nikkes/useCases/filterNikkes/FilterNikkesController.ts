import { Request, Response } from "express";
import { container } from "tsyringe";
import { FilterNikkesUseCase } from "./FilterNikkesUseCase";

export class FilterNikkesController {
  async handle(request: Request, response: Response) {
    const { rarity, burst, code, weapon } = request.query;

    const filterNikkesUseCase = container.resolve(FilterNikkesUseCase);
    const result = await filterNikkesUseCase.execute({
      rarity,
      burst,
      code,
      weapon,
    });

    return response.json(result);
  }
}
