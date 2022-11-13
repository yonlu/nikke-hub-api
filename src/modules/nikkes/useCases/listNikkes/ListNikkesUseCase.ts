import { prisma } from "../../../../database/prismaClient";

export class ListNikkesUseCase {
  async execute() {
    const nikkes = await prisma.nikke.findMany();

    return nikkes;
  }
}
