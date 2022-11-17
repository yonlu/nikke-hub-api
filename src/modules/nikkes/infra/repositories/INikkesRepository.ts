import { Nikke, Rarity, Burst, Code, Weapon } from "@prisma/client";

export default interface INikkesRepository {
  listNikkes: () => Promise<Nikke[]>;
  findNikke: (name: string) => Promise<Nikke | null>;
  filterNikkesByCriteria: (
    rarity?: Rarity,
    burst?: Burst,
    code?: Code,
    weapon?: Weapon
  ) => Promise<Nikke[] | null>;
}
