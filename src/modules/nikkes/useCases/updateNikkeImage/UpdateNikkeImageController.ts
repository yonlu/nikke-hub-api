import { Request, Response } from "express";
import { UpdateNikkeImageUseCase } from "./UpdateNikkeImageUseCase";

export class UpdateNikkeImageController {
  async handle(request: Request, response: Response) {
    const {
      params: { name },
    } = request;
    const updateNikkeUseCase = new UpdateNikkeImageUseCase();
    const image_file = request.file?.filename;
    await updateNikkeUseCase.execute({
      name,
      image_file,
    });

    return response.status(204).json({
      message: `${name} image upload successfully! Image file: ${image_file}`,
    });
  }
}
