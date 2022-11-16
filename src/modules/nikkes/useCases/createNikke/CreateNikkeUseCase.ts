import { prisma } from "../../../../database/prismaClient";
import validations from "../util/validations";

export class CreateNikkeUseCase {
  async execute({ details, image }: any) {
    const { info } = details;
    const { name, rarity, burst, code, weapon } = info;

    const nikkeExists = await prisma.nikke.findFirst({
      where: {
        name,
      },
    });

    if (nikkeExists) {
      throw new Error(`Nikke with name ${name} already exists`);
    }

    validations.validateNikke(info);

    const nikke = await prisma.nikke.create({
      data: {
        name,
        rarity,
        burst,
        code,
        weapon,
        image,
      },
    });

    return nikke;
  }
}
