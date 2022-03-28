import * as XLSX from "xlsx";
import { PrimaryCharacteristics } from "../../types/actor/parts/PrimaryCharacteristics";
import { WorkBook } from "xlsx";
import { SecondaryCharacteristics } from "../../types/actor/parts/SecondaryCharacteristics";

enum SheetNames {
  Principal = "Principal",
}

export class ExcelFormatter {
  private workbook: WorkBook;

  constructor(readonly xlsmPath: string) {
    this.workbook = XLSX.readFile(this.xlsmPath);
  }

  private getSheet(name: SheetNames) {
    return this.workbook.Sheets[name];
  }

  getPrimaryCharacteristics(): PrimaryCharacteristics {
    const sheet = this.getSheet(SheetNames.Principal);

    return {
      agility: { value: sheet["E11"].v },
      constitution: { value: sheet["E12"].v },
      dexterity: { value: sheet["E13"].v },
      strength: { value: sheet["E14"].v },
      intelligence: { value: sheet["E15"].v },
      perception: { value: sheet["E16"].v },
      power: { value: sheet["E17"].v },
      willPower: { value: sheet["E18"].v },
    };
  }

  getSecondaryCharacteristics(): SecondaryCharacteristics {
    const sheet = this.getSheet(SheetNames.Principal);

    return {
      fatigue: { max: sheet["N16"].v },
      initiative: { base: sheet["D31"].v },
      lifePoints: { max: sheet["N11"].v },
      resistances: {
        physical: { base: sheet["J58"].v },
        disease: { base: sheet["J59"].v },
        poison: { base: sheet["J60"].v },
        magic: { base: sheet["J61"].v },
        psychic: { base: sheet["J62"].v },
      },
    };
  }
}
