import * as XLSX from "xlsx";
import { PrimaryCharacteristics } from "../../types/actor/parts/PrimaryCharacteristics";
import { WorkBook } from "xlsx";
import { SecondaryCharacteristics } from "../../types/actor/parts/SecondaryCharacteristics";
import { ActorData } from "../../types/actor/ActorData";
import { AthleticsSkills } from "../../types/actor/parts/AthleticsSkills";
import { SocialSkills } from "../../types/actor/parts/SocialSkills";
import { PerceptionSkills } from "../../types/actor/parts/PerceptionSkills";
import { CreativeSkills } from "../../types/actor/parts/CreativeSkills";
import { IntellectualSkills } from "../../types/actor/parts/IntellectualSkills";
import { VigorSkills } from "../../types/actor/parts/VigorSkills";
import { SubterfugeSkills } from "../../types/actor/parts/SubterfugeSkills";

export const UNKNOWN_SKILL_VALUE = -200;

const capToDefault = (skill: unknown): number => {
  if (skill === "-") return UNKNOWN_SKILL_VALUE;

  return skill as number;
};

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

  getSkills(): ActorData["secondaries"] {
    return {
      athletics: this.getAthleticSkills(),
      social: this.getSocialSkills(),
      perception: this.getPerceptionSkills(),
      intellectual: this.getIntellectualSkills(),
      vigor: this.getVigorSkills(),
      subterfuge: this.getSubterfugeSkills(),
      creative: this.getCreativeSkills(),
    };
  }

  private getAthleticSkills(): AthleticsSkills {
    const sheet = this.getSheet(SheetNames.Principal);

    return {
      acrobatics: { base: { value: sheet["Q22"].v } },
      athleticism: { base: { value: sheet["Q23"].v } },
      ride: { base: { value: sheet["Q24"].v } },
      swim: { base: { value: sheet["Q25"].v } },
      climb: { base: { value: sheet["Q26"].v } },
      jump: { base: { value: sheet["Q27"].v } },
      piloting: { base: { value: sheet["Q28"].v } },
    };
  }

  private getSocialSkills(): SocialSkills {
    const sheet = this.getSheet(SheetNames.Principal);

    return {
      style: { base: { value: sheet["Q29"].v } },
      intimidate: { base: { value: sheet["Q30"].v } },
      leadership: { base: { value: sheet["Q31"].v } },
      persuasion: { base: { value: sheet["Q32"].v } },
      trading: { base: { value: sheet["Q33"].v } },
      streetwise: { base: { value: sheet["Q34"].v } },
      etiquette: { base: { value: sheet["Q35"].v } },
    };
  }

  private getPerceptionSkills(): PerceptionSkills {
    const sheet = this.getSheet(SheetNames.Principal);

    return {
      notice: { base: { value: sheet["Q36"].v } },
      search: { base: { value: sheet["Q37"].v } },
      track: { base: { value: sheet["Q38"].v } },
    };
  }

  private getIntellectualSkills(): IntellectualSkills {
    const sheet = this.getSheet(SheetNames.Principal);

    return {
      animals: { base: { value: sheet["Q39"].v } },
      science: { base: { value: capToDefault(sheet["Q40"].v) } },
      law: { base: { value: sheet["Q41"].v } },
      herbalLore: { base: { value: sheet["Q42"].v } },
      history: { base: { value: capToDefault(sheet["Q43"].v) } },
      tactics: { base: { value: sheet["Q44"].v } },
      medicine: { base: { value: capToDefault(sheet["Q45"].v) } },
      memorize: { base: { value: sheet["Q46"].v } },
      navigation: { base: { value: sheet["Q47"].v } },
      occult: { base: { value: sheet["Q48"].v } },
      appraisal: { base: { value: sheet["Q49"].v } },
      magicAppraisal: { base: { value: sheet["Q50"].v } },
    };
  }

  private getVigorSkills(): VigorSkills {
    const sheet = this.getSheet(SheetNames.Principal);

    return {
      composure: { base: { value: sheet["Q51"].v } },
      featsOfStrength: { base: { value: sheet["Q52"].v } },
      withstandPain: { base: { value: sheet["Q53"].v } },
    };
  }

  private getSubterfugeSkills(): SubterfugeSkills {
    const sheet = this.getSheet(SheetNames.Principal);

    return {
      lockPicking: { base: { value: sheet["Q54"].v } },
      disguise: { base: { value: sheet["Q55"].v } },
      hide: { base: { value: sheet["Q56"].v } },
      theft: { base: { value: sheet["Q57"].v } },
      stealth: { base: { value: sheet["Q58"].v } },
      trapLore: { base: { value: sheet["Q59"].v } },
      poisons: { base: { value: capToDefault(sheet["Q60"].v) } },
    };
  }

  private getCreativeSkills(): CreativeSkills {
    const sheet = this.getSheet(SheetNames.Principal);

    return {
      art: { base: { value: sheet["Q61"].v } },
      dance: { base: { value: capToDefault(sheet["Q62"].v) } },
      forging: { base: { value: capToDefault(sheet["Q63"].v) } },
      runes: { base: { value: sheet["Q64"].v } },
      alchemy: { base: { value: sheet["Q65"].v } },
      animism: { base: { value: sheet["Q66"].v } },
      music: { base: { value: capToDefault(sheet["Q67"].v) } },
      sleightOfHand: { base: { value: sheet["Q68"].v } },
      ritualCalligraphy: { base: { value: sheet["Q69"].v } },
      jewelry: { base: { value: sheet["Q70"].v } },
      tailoring: { base: { value: sheet["Q71"].v } },
      puppetMaking: { base: { value: sheet["Q72"].v } },
    };
  }
}
