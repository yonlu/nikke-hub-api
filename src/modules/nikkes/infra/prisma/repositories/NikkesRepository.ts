import { PrismaClient } from "@prisma/client";
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
}

export default NikkesRepository;
