import { prisma } from "../../../../database/prismaClient";

export class DeleteNikkeUseCase {
  async execute(id: string) {
    const nikkeExists = await prisma.nikke.findUnique({
      where: {
        id,
      },
    });

    if (!nikkeExists) {
      throw new Error(`Nikke with id ${id} doesn't exist`);
    }

    if (nikkeExists) {
      await prisma.nikke.delete({ where: { id } });
    }
  }
}
