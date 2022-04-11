import * as XLSX from "xlsx";
import { PrimaryCharacteristics } from "../../types/actor/parts/PrimaryCharacteristics";
import { WorkBook } from "xlsx";
import { SecondaryCharacteristics } from "../../types/actor/parts/SecondaryCharacteristics";
import { Actor, ActorData } from "../../types/actor/Actor";
import { AthleticsSkills } from "../../types/actor/parts/AthleticsSkills";
import { SocialSkills } from "../../types/actor/parts/SocialSkills";
import { PerceptionSkills } from "../../types/actor/parts/PerceptionSkills";
import { CreativeSkills } from "../../types/actor/parts/CreativeSkills";
import { IntellectualSkills } from "../../types/actor/parts/IntellectualSkills";
import { VigorSkills } from "../../types/actor/parts/VigorSkills";
import { SubterfugeSkills } from "../../types/actor/parts/SubterfugeSkills";
import { AspectData } from "../../types/actor/parts/AspectData";

export const UNKNOWN_SKILL_VALUE = -200;

const capToDefault = (skill: unknown): number => {
  if (skill === "-") return UNKNOWN_SKILL_VALUE;

  return skill as number;
};

enum SheetNames {
  Principal = "Principal",
  General = "General",
  PDs = "PDs",
  Mystic = "Místicos",
  Ki = "Ki",
  Psychic = "Psíquicos",
}

export class ExcelFormatter {
  private constructor(private readonly workbook: XLSX.WorkBook) {}

  static fromPath(path: string) {
    return new ExcelFormatter(XLSX.readFile(path));
  }

  static fromArrayBuffer(data: ArrayBuffer) {
    return new ExcelFormatter(XLSX.read(data, { type: "array" }));
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
      initiative: { base: { value: sheet["D31"].v } },
      lifePoints: { max: sheet["N11"].v },
      resistances: {
        physical: { base: { value: sheet["J58"].v } },
        disease: { base: { value: sheet["J59"].v } },
        poison: { base: { value: sheet["J60"].v } },
        magic: { base: { value: sheet["J61"].v } },
        psychic: { base: { value: sheet["J62"].v } },
      },
    };
  }

  getAthleticSkills(): AthleticsSkills {
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

  getSocialSkills(): SocialSkills {
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

  getPerceptionSkills(): PerceptionSkills {
    const sheet = this.getSheet(SheetNames.Principal);

    return {
      notice: { base: { value: sheet["Q36"].v } },
      search: { base: { value: sheet["Q37"].v } },
      track: { base: { value: sheet["Q38"].v } },
    };
  }

  getIntellectualSkills(): IntellectualSkills {
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

  getVigorSkills(): VigorSkills {
    const sheet = this.getSheet(SheetNames.Principal);

    return {
      composure: { base: { value: sheet["Q51"].v } },
      featsOfStrength: { base: { value: sheet["Q52"].v } },
      withstandPain: { base: { value: sheet["Q53"].v } },
    };
  }

  getSubterfugeSkills(): SubterfugeSkills {
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

  getCreativeSkills(): CreativeSkills {
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

  getAspect(): AspectData {
    const sheetGeneral = this.getSheet(SheetNames.General);
    const sheetPrincipal = this.getSheet(SheetNames.Principal);

    return {
      age: { value: sheetGeneral["F26"].v },
      appearance: { value: sheetGeneral["P24"].v },
      eyes: { value: sheetGeneral["I25"].v },
      gender: { value: sheetGeneral["F24"].v },
      hair: { value: sheetGeneral["N25"].v },
      height: { value: sheetGeneral["I24"].v },
      race: { value: sheetGeneral["F23"].v },
      size: { value: sheetPrincipal["K6"].v },
      weight: { value: sheetGeneral["L24"].v },
    };
  }

  getGeneralData(): ActorData["general"] {
    const sheetGeneral = this.getSheet(SheetNames.General);
    const sheetPrincipal = this.getSheet(SheetNames.Principal);

    return {
      aspect: this.getAspect(),
      presence: { base: { value: sheetPrincipal["J57"].v } },
      money: {
        gold: { value: sheetGeneral["Y59"].v },
        silver: { value: sheetGeneral["Y61"].v },
        cooper: { value: sheetGeneral["Y63"].v },
      },
    };
  }

  getCombatData(): ActorData["combat"] {
    const sheetPDs = this.getSheet(SheetNames.PDs);

    return {
      attack: {
        base: {
          value: sheetPDs["AA22"].v,
        },
      },
      block: {
        base: {
          value: sheetPDs["AA23"].v,
        },
      },
      dodge: {
        base: {
          value: sheetPDs["AA24"].v,
        },
      },
      wearArmor: { value: sheetPDs["AA25"].v },
    };
  }

  getMysticData(): ActorData["mystic"] {
    const sheet = this.getSheet(SheetNames.Mystic);

    return {
      act: {
        main: {
          base: {
            value: sheet["L12"].v,
          },
        },
      },
      magicProjection: {
        base: { value: sheet["O12"].v },
        imbalance: {
          offensive: { base: { value: sheet["P12"].v } },
          defensive: { base: { value: sheet["Q12"].v } },
        },
      },
      summoning: {
        summon: { base: { value: sheet["M25"].v } },
        control: { base: { value: sheet["M26"].v } },
        bind: { base: { value: sheet["M27"].v } },
        banish: { base: { value: sheet["M28"].v } },
      },
      zeonRegeneration: { base: { value: sheet["J12"].v } },
      innateMagic: { main: { value: sheet["L14"].v } },
      zeon: {
        max: sheet["K18"].v,
      },
    };
  }

  getDomineData(): ActorData["domine"] {
    const sheet = this.getSheet(SheetNames.Ki);

    return {
      seals: {
        minor: {
          earth: { isActive: { value: sheet["X11"] !== undefined } },
          metal: { isActive: { value: sheet["X12"] !== undefined } },
          wind: { isActive: { value: sheet["X13"] !== undefined } },
          water: { isActive: { value: sheet["X14"] !== undefined } },
          wood: { isActive: { value: sheet["X15"] !== undefined } },
        },
        major: {
          earth: { isActive: { value: sheet["Y11"] !== undefined } },
          metal: { isActive: { value: sheet["Y12"] !== undefined } },
          wind: { isActive: { value: sheet["Y13"] !== undefined } },
          water: { isActive: { value: sheet["Y14"] !== undefined } },
          wood: { isActive: { value: sheet["Y15"] !== undefined } },
        },
      },
      kiAccumulation: {
        agility: { base: { value: sheet["D12"].v } },
        constitution: { base: { value: sheet["D14"].v } },
        dexterity: { base: { value: sheet["D16"].v } },
        strength: { base: { value: sheet["D18"].v } },
        power: { base: { value: sheet["D20"].v } },
        willPower: { base: { value: sheet["D22"].v } },
        generic: { max: sheet["F24"].v },
      },
      martialKnowledge: {
        max: {
          value: sheet["C29"].v,
        },
      },
    };
  }

  getPsychicData(): ActorData["psychic"] {
    const sheetPDs = this.getSheet(SheetNames.PDs);

    return {
      psychicPoints: {
        max: sheetPDs["AA108"].v,
      },
      psychicProjection: { base: { value: sheetPDs["AA109"].v } },
    };
  }

  getActor(): Actor {
    const sheet = this.getSheet(SheetNames.General);

    return {
      name: sheet["F22"].v,
      data: {
        version: 1,
        general: this.getGeneralData(),
        characteristics: {
          primaries: this.getPrimaryCharacteristics(),
          secondaries: this.getSecondaryCharacteristics(),
        },
        secondaries: {
          athletics: this.getAthleticSkills(),
          creative: this.getCreativeSkills(),
          vigor: this.getVigorSkills(),
          social: this.getSocialSkills(),
          perception: this.getPerceptionSkills(),
          subterfuge: this.getSubterfugeSkills(),
          intellectual: this.getIntellectualSkills(),
        },
        combat: this.getCombatData(),
        mystic: this.getMysticData(),
        domine: this.getDomineData(),
        psychic: this.getPsychicData(),
      },
    };
  }
}
