import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListSingleNikkeUseCase } from "./ListSingleNikkeUseCase";

export class ListSingleNikkeController {
  async handle(request: Request, response: Response) {
    const { name } = request.params;

    const listSingleNikkeUseCase = container.resolve(ListSingleNikkeUseCase);
    const result = await listSingleNikkeUseCase.execute(name);

    return response.json(result);
  }
}
