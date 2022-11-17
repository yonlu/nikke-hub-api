import { Nikke } from "@prisma/client";
import { instanceToInstance } from "class-transformer";
import { IListNikkesResponseDTO } from "../../dtos/IListNikkesResponseDTO";

class NikkeMap {
  static toDTO({
    id,
    name,
    rarity,
    burst,
    code,
    weapon,
    image,
  }: Nikke): IListNikkesResponseDTO {
    const nikke = instanceToInstance({
      id,
      name,
      rarity,
      burst,
      code,
      weapon,
      image: `http://localhost:3000/files/nikkes/${image}`, // refactor this sh*t
    });

    return nikke;
  }
}

export default NikkeMap;
