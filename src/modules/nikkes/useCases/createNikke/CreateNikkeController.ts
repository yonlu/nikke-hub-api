import { Request, Response } from "express";
import { CreateNikkeUseCase } from "./CreateNikkeUseCase";

export class CreateNikkeController {
  async handle(request: Request, response: Response) {
    const { details } = request.body;
    const parsedDetails = JSON.parse(details);
    const { filename } = request.file as Express.Multer.File;
    const createNikkeUseCase = new CreateNikkeUseCase();

    const result = await createNikkeUseCase.execute({
      details: parsedDetails,
      image: filename,
    });

    return response.json(result);
  }
}
