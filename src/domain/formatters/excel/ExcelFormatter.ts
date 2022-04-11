import * as XLSX from "xlsx";
import { PrimaryCharacteristics } from "../../types/actor/parts/PrimaryCharacteristics";
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
      agility: { value: sheet["G11"]?.v ?? 5 },
      constitution: { value: sheet["G12"]?.v ?? 5 },
      dexterity: { value: sheet["G13"]?.v ?? 5 },
      strength: { value: sheet["G14"]?.v ?? 5 },
      intelligence: { value: sheet["G15"]?.v ?? 5 },
      perception: { value: sheet["G16"]?.v ?? 5 },
      power: { value: sheet["G17"]?.v ?? 5 },
      willPower: { value: sheet["G18"]?.v ?? 5 },
    };
  }

  getSecondaryCharacteristics(): SecondaryCharacteristics {
    const sheet = this.getSheet(SheetNames.Principal);

    return {
      fatigue: { max: sheet["N16"]?.v ?? 0 },
      initiative: { base: { value: sheet["D31"]?.v } },
      lifePoints: { max: sheet["N11"]?.v },
      resistances: {
        physical: { base: { value: sheet["J58"]?.v } },
        disease: { base: { value: sheet["J59"]?.v } },
        poison: { base: { value: sheet["J60"]?.v } },
        magic: { base: { value: sheet["J61"]?.v } },
        psychic: { base: { value: sheet["J62"]?.v } },
      },
    };
  }

  getAthleticSkills(): AthleticsSkills {
    const sheet = this.getSheet(SheetNames.Principal);

    return {
      acrobatics: { base: { value: sheet["Q22"]?.v ?? 0 } },
      athleticism: { base: { value: sheet["Q23"]?.v ?? 0 } },
      ride: { base: { value: sheet["Q24"]?.v ?? 0 } },
      swim: { base: { value: sheet["Q25"]?.v ?? 0 } },
      climb: { base: { value: sheet["Q26"]?.v ?? 0 } },
      jump: { base: { value: sheet["Q27"]?.v ?? 0 } },
      piloting: { base: { value: sheet["Q28"]?.v ?? 0 } },
    };
  }

  getSocialSkills(): SocialSkills {
    const sheet = this.getSheet(SheetNames.Principal);

    return {
      style: { base: { value: sheet["Q29"]?.v ?? 0 } },
      intimidate: { base: { value: sheet["Q30"]?.v ?? 0 } },
      leadership: { base: { value: sheet["Q31"]?.v ?? 0 } },
      persuasion: { base: { value: sheet["Q32"]?.v ?? 0 } },
      trading: { base: { value: sheet["Q33"]?.v ?? 0 } },
      streetwise: { base: { value: sheet["Q34"]?.v ?? 0 } },
      etiquette: { base: { value: sheet["Q35"]?.v ?? 0 } },
    };
  }

  getPerceptionSkills(): PerceptionSkills {
    const sheet = this.getSheet(SheetNames.Principal);

    return {
      notice: { base: { value: sheet["Q36"]?.v ?? 0 } },
      search: { base: { value: sheet["Q37"]?.v ?? 0 } },
      track: { base: { value: sheet["Q38"]?.v ?? 0 } },
    };
  }

  getIntellectualSkills(): IntellectualSkills {
    const sheet = this.getSheet(SheetNames.Principal);

    return {
      animals: { base: { value: sheet["Q39"]?.v ?? 0 } },
      science: { base: { value: capToDefault(sheet["Q40"]?.v ?? 0) } },
      law: { base: { value: sheet["Q41"]?.v ?? 0 } },
      herbalLore: { base: { value: sheet["Q42"]?.v ?? 0 } },
      history: { base: { value: capToDefault(sheet["Q43"]?.v ?? 0) } },
      tactics: { base: { value: sheet["Q44"]?.v ?? 0 } },
      medicine: { base: { value: capToDefault(sheet["Q45"]?.v ?? 0) } },
      memorize: { base: { value: sheet["Q46"]?.v ?? 0 } },
      navigation: { base: { value: sheet["Q47"]?.v ?? 0 } },
      occult: { base: { value: sheet["Q48"]?.v ?? 0 } },
      appraisal: { base: { value: sheet["Q49"]?.v ?? 0 } },
      magicAppraisal: { base: { value: sheet["Q50"]?.v ?? 0 } },
    };
  }

  getVigorSkills(): VigorSkills {
    const sheet = this.getSheet(SheetNames.Principal);

    return {
      composure: { base: { value: sheet["Q51"]?.v ?? 0 } },
      featsOfStrength: { base: { value: sheet["Q52"]?.v ?? 0 } },
      withstandPain: { base: { value: sheet["Q53"]?.v ?? 0 } },
    };
  }

  getSubterfugeSkills(): SubterfugeSkills {
    const sheet = this.getSheet(SheetNames.Principal);

    return {
      lockPicking: { base: { value: sheet["Q54"]?.v ?? 0 } },
      disguise: { base: { value: sheet["Q55"]?.v ?? 0 } },
      hide: { base: { value: sheet["Q56"]?.v ?? 0 } },
      theft: { base: { value: sheet["Q57"]?.v ?? 0 } },
      stealth: { base: { value: sheet["Q58"]?.v ?? 0 } },
      trapLore: { base: { value: sheet["Q59"]?.v ?? 0 } },
      poisons: { base: { value: capToDefault(sheet["Q60"]?.v ?? 0) } },
    };
  }

  getCreativeSkills(): CreativeSkills {
    const sheet = this.getSheet(SheetNames.Principal);

    return {
      art: { base: { value: sheet["Q61"]?.v ?? 0 } },
      dance: { base: { value: capToDefault(sheet["Q62"]?.v ?? 0) } },
      forging: { base: { value: capToDefault(sheet["Q63"]?.v ?? 0) } },
      runes: { base: { value: sheet["Q64"]?.v ?? 0 } },
      alchemy: { base: { value: sheet["Q65"]?.v ?? 0 } },
      animism: { base: { value: sheet["Q66"]?.v ?? 0 } },
      music: { base: { value: capToDefault(sheet["Q67"]?.v ?? 0) } },
      sleightOfHand: { base: { value: sheet["Q68"]?.v ?? 0 } },
      ritualCalligraphy: { base: { value: sheet["Q69"]?.v ?? 0 } },
      jewelry: { base: { value: sheet["Q70"]?.v ?? 0 } },
      tailoring: { base: { value: sheet["Q71"]?.v ?? 0 } },
      puppetMaking: { base: { value: sheet["Q72"]?.v ?? 0 } },
    };
  }

  getAspect(): AspectData {
    const sheetGeneral = this.getSheet(SheetNames.General);
    const sheetPrincipal = this.getSheet(SheetNames.Principal);

    return {
      age: { value: sheetGeneral["F26"]?.v },
      appearance: { value: sheetGeneral["P24"]?.v },
      eyes: { value: sheetGeneral["I25"]?.v },
      gender: { value: sheetGeneral["F24"]?.v },
      hair: { value: sheetGeneral["N25"]?.v },
      height: { value: sheetGeneral["I24"]?.v },
      race: { value: sheetGeneral["F23"]?.v },
      size: { value: sheetPrincipal["K6"]?.v },
      weight: { value: sheetGeneral["L24"]?.v },
    };
  }

  getGeneralData(): ActorData["general"] {
    const sheetGeneral = this.getSheet(SheetNames.General);
    const sheetPrincipal = this.getSheet(SheetNames.Principal);

    return {
      aspect: this.getAspect(),
      presence: { base: { value: sheetPrincipal["J57"]?.v } },
      money: {
        gold: { value: sheetGeneral["Y59"]?.v },
        silver: { value: sheetGeneral["Y61"]?.v },
        cooper: { value: sheetGeneral["Y63"]?.v },
      },
    };
  }

  getCombatData(): ActorData["combat"] {
    const sheetPDs = this.getSheet(SheetNames.PDs);

    return {
      attack: {
        base: {
          value: sheetPDs["AA22"]?.v,
        },
      },
      block: {
        base: {
          value: sheetPDs["AA23"]?.v,
        },
      },
      dodge: {
        base: {
          value: sheetPDs["AA24"]?.v,
        },
      },
      wearArmor: { value: sheetPDs["AA25"]?.v },
    };
  }

  getMysticData(): ActorData["mystic"] {
    const sheet = this.getSheet(SheetNames.Mystic);

    return {
      act: {
        main: {
          base: {
            value: sheet["L12"]?.v,
          },
        },
      },
      magicProjection: {
        base: { value: sheet["O12"]?.v },
        imbalance: {
          offensive: { base: { value: sheet["P12"]?.v } },
          defensive: { base: { value: sheet["Q12"]?.v } },
        },
      },
      summoning: {
        summon: { base: { value: sheet["M25"]?.v } },
        control: { base: { value: sheet["M26"]?.v } },
        bind: { base: { value: sheet["M27"]?.v } },
        banish: { base: { value: sheet["M28"]?.v } },
      },
      zeonRegeneration: { base: { value: sheet["J12"]?.v } },
      innateMagic: { main: { value: sheet["L14"]?.v } },
      zeon: {
        max: sheet["K18"]?.v,
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
        agility: { base: { value: sheet["D12"]?.v } },
        constitution: { base: { value: sheet["D14"]?.v } },
        dexterity: { base: { value: sheet["D16"]?.v } },
        strength: { base: { value: sheet["D18"]?.v } },
        power: { base: { value: sheet["D20"]?.v } },
        willPower: { base: { value: sheet["D22"]?.v } },
        generic: { max: sheet["F24"]?.v },
      },
      martialKnowledge: {
        max: {
          value: sheet["C29"]?.v,
        },
      },
    };
  }

  getPsychicData(): ActorData["psychic"] {
    const sheetPDs = this.getSheet(SheetNames.PDs);

    return {
      psychicPoints: {
        max: sheetPDs["AA108"]?.v,
      },
      psychicProjection: { base: { value: sheetPDs["AA109"]?.v } },
    };
  }

  getActor(): Actor {
    const sheet = this.getSheet(SheetNames.General);

    return {
      name: sheet["F22"]?.v,
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
