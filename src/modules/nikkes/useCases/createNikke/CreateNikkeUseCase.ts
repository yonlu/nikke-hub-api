import { Rarity, Burst } from "@prisma/client";
import { prisma } from "../../../../database/prismaClient";

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

    const isRarityValid = Object.values(Rarity).includes(rarity as Rarity);
    const isBurstValid = Object.values(Burst).includes(burst as Burst);

    if (!isRarityValid) {
      throw new Error(`Nikke Rarity type: ${rarity} is invalid`);
    }

    if (!isBurstValid) {
      throw new Error(`Nikke Burst type: ${burst} is invalid`);
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
