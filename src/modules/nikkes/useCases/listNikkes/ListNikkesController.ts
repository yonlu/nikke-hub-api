import { Request, Response } from "express";
import { ListNikkesUseCase } from "./ListNikkesUseCase";

export class ListNikkesController {
  async handle(request: Request, response: Response) {
    const listNikkesUseCase = new ListNikkesUseCase();
    const result = await listNikkesUseCase.execute();

    return response.json(result);
  }
}
