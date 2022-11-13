import { Request, Response } from "express";
import { UpdateNikkeUseCase } from "./UpdateNikkeUseCase";

export class UpdateNikkeController {
  async handle(request: Request, response: Response) {
    const {
      body: { name, info },
      params: { id },
    } = request;
    const updateNikkeUseCase = new UpdateNikkeUseCase();
    const result = await updateNikkeUseCase.execute({
      id,
      name,
      info,
    });

    return response.json(result);
  }
}
