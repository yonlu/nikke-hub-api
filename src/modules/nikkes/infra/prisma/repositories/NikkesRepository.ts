import { Burst, Code, PrismaClient, Rarity, Weapon } from "@prisma/client";
import { prisma } from "../../../../../database/prismaClient";
import INikkesRepository from "../../repositories/INikkesRepository";

class NikkesRepository implements INikkesRepository {
  private readonly repository: PrismaClient;

  constructor() {
    this.repository = prisma;
  }

  public async listNikkes() {
    return await this.repository.nikke.findMany();
  }

  public async findNikke(name: any) {
    return await this.repository.nikke.findFirst({
      where: name,
    });
  }

  public async filterNikkesByCriteria(
    rarity?: Rarity,
    burst?: Burst,
    code?: Code,
    weapon?: Weapon
  ) {
    return await this.repository.nikke.findMany({
      where: {
        rarity,
        burst,
        code,
        weapon,
      },
    });
  }
}

export default NikkesRepository;
