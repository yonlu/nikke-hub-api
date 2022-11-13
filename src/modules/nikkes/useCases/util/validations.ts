import { Burst, Code, Rarity, Weapon } from "@prisma/client";
import { Info } from "../../domain/Info";

export default class validations {
  static validateNikke({ rarity, burst, code, weapon }: Info) {
    validations.validateEnum(rarity, Rarity);
    validations.validateEnum(burst, Burst);
    validations.validateEnum(code, Code);
    validations.validateEnum(weapon, Weapon);
  }

  static validateEnum(value: string, type: any) {
    const isTypeValid = Object.values(type).includes(value as typeof type);

    if (!isTypeValid) {
      throw new Error(`Nikke type ${value} is invalid`);
    }
  }
}
