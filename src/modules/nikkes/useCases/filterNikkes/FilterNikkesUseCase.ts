import { prisma } from "../../../../database/prismaClient";

export class FilterNikkesUseCase {
  async execute({ rarity, burst }: any) {
    const nikkes = await prisma.nikke.findMany({
      where: {
        rarity,
      },
    });

    return nikkes;
  }
}
