import { container } from "tsyringe";
import INikkesRepository from "../../modules/nikkes/infra/repositories/INikkesRepository";
import NikkesRepository from "../../modules/nikkes/infra/prisma/repositories/NikkesRepository";

container.registerSingleton<INikkesRepository>(
  "NikkesRepository",
  NikkesRepository
);
