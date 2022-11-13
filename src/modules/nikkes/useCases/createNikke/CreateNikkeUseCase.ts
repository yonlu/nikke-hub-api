import { prisma } from "../../../../database/prismaClient";
import { Nikke } from "../../domain/Nikke";
import validations from "../util/validations";

export class CreateNikkeUseCase {
  async execute({ name, info }: Nikke) {
    const nikkeExists = await prisma.nikke.findUnique({
      where: {
        name,
      },
    });

    if (nikkeExists) {
      throw new Error(`Nikke with name ${name} already exists`);
    }

    validations.validateNikke(info);

    const { rarity, burst, code, weapon } = info;

    const nikke = await prisma.nikke.create({
      data: {
        name,
        rarity,
        burst,
        code,
        weapon,
      },
    });

    return nikke;
  }
}
