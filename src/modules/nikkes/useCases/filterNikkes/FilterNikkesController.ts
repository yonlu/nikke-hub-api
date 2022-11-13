import { Request, Response } from "express";
import { FilterNikkesUseCase } from "./FilterNikkesUseCase";

export class FilterNikkesController {
  async handle(request: Request, response: Response) {
    const { rarity, burst } = request.params;
    const createNikkeUseCase = new FilterNikkesUseCase();
    const result = await createNikkeUseCase.execute({ rarity, burst });

    return response.json(result);
  }
}
