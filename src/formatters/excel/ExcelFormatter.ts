import * as XLSX from "xlsx";
import { PrimaryCharacteristics } from "../../types/actor/parts/PrimaryCharacteristics";
import { WorkBook } from "xlsx";

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
      agility: {
        value: sheet["E11"].v,
      },
      constitution: {
        value: sheet["E12"].v,
      },
      dexterity: {
        value: sheet["E13"].v,
      },
      strength: {
        value: sheet["E14"].v,
      },
      intelligence: {
        value: sheet["E15"].v,
      },
      perception: {
        value: sheet["E16"].v,
      },
      power: {
        value: sheet["E17"].v,
      },
      willPower: {
        value: sheet["E18"].v,
      },
    };
  }
}
