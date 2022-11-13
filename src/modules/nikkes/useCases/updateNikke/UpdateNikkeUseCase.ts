import { prisma } from "../../../../database/prismaClient";
import { Nikke } from "../../domain/Nikke";
import validations from "../util/validations";

export class UpdateNikkeUseCase {
  async execute({ id, name, info }: Nikke) {
    const nikkeExists = await prisma.nikke.findUnique({
      where: {
        id,
      },
    });

    if (!nikkeExists) {
      throw new Error(`Nikke with id ${id} doesn't exist`);
    }

    validations.validateNikke(info);

    const { rarity, burst, code, weapon } = info;

    if (nikkeExists) {
      const nikke = await prisma.nikke.update({
        where: {
          id,
        },
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
}
