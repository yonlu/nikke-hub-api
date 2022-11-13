import { prisma } from "../../../../database/prismaClient";

enum Rarity {
  R,
  SR,
  SSR,
}

enum Burst {
  I,
  II,
  III,
}

interface ICreateNikke {
  name: string;
  rarity: Rarity;
  burst: Burst;
}

export class CreateNikkeUseCase {
  async execute({ name, rarity, burst }: ICreateNikke) {
    const nikkeExists = await prisma.nikke.findUnique({
      where: {
        name,
      },
    });

    if (nikkeExists) {
      throw new Error(`Nikke with name ${name} already exists`);
    }

    const nikke = await prisma.nikke.create({
      data: {
        name,
        rarity,
        burst,
      },
    });

    return nikke;
  }
}
