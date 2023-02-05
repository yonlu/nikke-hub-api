import { Nikke } from "@prisma/client";
import { IListNikkesResponseDTO } from "../../dtos/IListNikkesResponseDTO";

export function sortNikkesByName(nikkes: Nikke[] | IListNikkesResponseDTO[]) {
  if (nikkes.length) {

    // sort by name
    nikkes?.sort((a: IListNikkesResponseDTO, b: IListNikkesResponseDTO) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if (nameA < nameB) {
        return -1;
      }

      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  }
}
