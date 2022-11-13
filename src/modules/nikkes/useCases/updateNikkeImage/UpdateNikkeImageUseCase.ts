import { prisma } from "../../../../database/prismaClient";
import { deleteFile } from "../../../../utils/file";

interface IUpdateNikkeImage {
  name: string;
  image_file: any;
}

export class UpdateNikkeImageUseCase {
  async execute({ name, image_file }: IUpdateNikkeImage) {
    if (!image_file) {
      throw new Error("Image file not provided");
    }

    const nikke = await prisma.nikke.findUnique({
      where: {
        name,
      },
    });

    if (!nikke) {
      throw new Error(`Selected Nikke with name: ${name} not found`);
    }

    if (nikke.image) {
      await deleteFile(`./tmp/nikke/${nikke.image}`);
    }

    const updatedNikke = await prisma.nikke.update({
      where: {
        name,
      },
      data: {
        image: image_file,
      },
    });

    return updatedNikke;
  }
}
