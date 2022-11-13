import { Request, Response } from "express";
import { DeleteNikkeUseCase } from "./DeleteNikkeUseCase";

export class DeleteNikkeController {
  async handle(request: Request, response: Response) {
    const {
      params: { id },
    } = request;
    const deleteNikkeUseCase = new DeleteNikkeUseCase();
    const result = await deleteNikkeUseCase.execute(id);

    return response.json(result);
  }
}
