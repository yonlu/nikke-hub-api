import { Request, Response } from "express";
import { CreateNikkeUseCase } from "./CreateNikkeUseCase";

export class CreateNikkeController {
  async handle(request: Request, response: Response) {
    const { name, rarity, burst } = request.body;
    const createNikkeUseCase = new CreateNikkeUseCase();
    const result = await createNikkeUseCase.execute({
      name,
      rarity,
      burst,
    });

    return response.json(result);
  }
}
