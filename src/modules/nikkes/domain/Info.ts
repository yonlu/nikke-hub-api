import { Burst, Code, Rarity, Weapon } from "@prisma/client";

export interface Info {
  rarity: Rarity;
  burst: Burst;
  code: Code;
  weapon: Weapon;
}
