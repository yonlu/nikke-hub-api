import { Nikke } from "@prisma/client";

export default interface INikkesRepository {
  listNikkes: () => Promise<Nikke[]>;
  findNikke: (name: string) => Promise<Nikke | null>;
}
