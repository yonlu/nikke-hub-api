import { Burst, Code, PrismaClient, Rarity, Weapon } from "@prisma/client";
import { prisma } from "../../../../../database/prismaClient";
import validations from "../../../useCases/util/validations";
import INikkesRepository from "../../repositories/INikkesRepository";

class NikkesRepository implements INikkesRepository {
  private readonly repository: PrismaClient;

  constructor() {
    this.repository = prisma;
  }

  public async listNikkes() {
    return await this.repository.nikke.findMany();
  }

  public async listSingleNikke(name: string) {
    return await this.repository.nikke.findFirst({
      where: {
        name,
      },
    });
  }

  public async findNikke(name: any) {
    return await this.repository.nikke.findFirst({
      where: name,
    });
  }

  public async filterNikkesByCriteria(
    rarity: Rarity[],
    burst: Burst[],
    code: Code[],
    weapon: Weapon[]
  ) {
    let filterQueryObject;

    const filteredRarities = validations.translateStringArrayToEnumValues(
      rarity,
      Rarity
    );

    const filteredBursts = validations.translateStringArrayToEnumValues(
      burst,
      Burst
    );

    const filteredCodes = validations.translateStringArrayToEnumValues(
      code,
      Code
    );

    const filteredWeapons = validations.translateStringArrayToEnumValues(
      weapon,
      Weapon
    );

    const rarityQuery = {
      rarity: {
        in: filteredRarities.length
          ? filteredRarities
          : [Rarity.R, Rarity.SR, Rarity.SSR],
      },
    };

    const burstQuery = {
      burst: {
        in: filteredBursts.length
          ? filteredBursts
          : [Burst.I, Burst.II, Burst.III],
      },
    };

    const codeQuery = {
      code: {
        in: filteredCodes.length
          ? filteredCodes
          : [Code.ANMI, Code.DMTR, Code.HSTA, Code.PSID, Code.ZEUS],
      },
    };

    const weaponQuery = {
      weapon: {
        in: filteredWeapons.length
          ? filteredWeapons
          : [Weapon.AR, Weapon.MG, Weapon.RL, Weapon.SG, Weapon.SMG, Weapon.SR],
      },
    };

    filterQueryObject = {
      where: {
        AND: [rarityQuery, burstQuery, codeQuery, weaponQuery],
      },
    };

    return await this.repository.nikke.findMany(filterQueryObject);
  }
}

export default NikkesRepository;
