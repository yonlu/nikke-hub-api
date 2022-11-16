import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListNikkesUseCase } from "./ListNikkesUseCase";

export class ListNikkesController {
  async handle(request: Request, response: Response) {
    const listNikkesUseCase = container.resolve(ListNikkesUseCase);
    const result = await listNikkesUseCase.execute();

    return response.json(result);
  }
}
