import { Nikke, Rarity, Burst, Code, Weapon } from "@prisma/client";

export default interface INikkesRepository {
  listNikkes: () => Promise<Nikke[]>;
  listSingleNikke: (name: string) => Promise<Nikke | null>;
  findNikke: (name: string) => Promise<Nikke | null>;
  filterNikkesByCriteria: (
    rarity?: Rarity,
    burst?: Burst,
    code?: Code,
    weapon?: Weapon
  ) => Promise<Nikke[] | null>;
}
