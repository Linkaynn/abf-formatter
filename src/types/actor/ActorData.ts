import { ActorDataGeneral } from "./parts/ActorDataGeneral";
import { PrimaryCharacteristics } from "./parts/PrimaryCharacteristics";
import { SecondaryCharacteristics } from "./parts/SecondaryCharacteristics";
import { AthleticsSkills } from "./parts/AthleticsSkills";
import { VigorSkills } from "./parts/VigorSkills";
import { PerceptionSkills } from "./parts/PerceptionSkills";
import { IntellectualSkills } from "./parts/IntellectualSkills";
import { SocialSkills } from "./parts/SocialSkills";
import { SubterfugeSkills } from "./parts/SubterfugeSkills";
import { CreativeSkills } from "./parts/CreativeSkills";
import { FoundryNumericField } from "./fields/FoundryNumericField";
import { FoundryMaximumField } from "./fields/FoundryMaximumField";
import { FoundryBooleanField } from "./fields/FoundryBooleanField";

export type ActorData = {
  version: number;
  ui: {
    contractibleItems: {};
    tabVisibility: {
      mystic: FoundryBooleanField;
      domine: FoundryBooleanField;
      psychic: FoundryBooleanField;
    };
  };
  general: ActorDataGeneral;

  characteristics: {
    primaries: PrimaryCharacteristics;
    secondaries: SecondaryCharacteristics;
  };

  secondaries: {
    athletics: AthleticsSkills;
    vigor: VigorSkills;
    perception: PerceptionSkills;
    intellectual: IntellectualSkills;
    social: SocialSkills;
    subterfuge: SubterfugeSkills;
    creative: CreativeSkills;
  };

  combat: {
    attack: {
      base: FoundryNumericField;
    };
    block: {
      base: FoundryNumericField;
    };
    dodge: {
      base: FoundryNumericField;
    };
    wearArmor: FoundryNumericField;
  };

  mystic: {
    act: {
      main: {
        base: FoundryNumericField;
      };
    };
    zeon: {
      max: number;
    };
    zeonRegeneration: {
      base: FoundryNumericField;
    };
    innateMagic: {
      main: FoundryNumericField;
    };
    magicProjection: {
      base: FoundryNumericField;
      imbalance: {
        offensive: {
          base: FoundryNumericField;
        };
        defensive: {
          base: FoundryNumericField;
        };
      };
    };
    summoning: {
      summon: {
        base: FoundryNumericField;
      };
      banish: {
        base: FoundryNumericField;
      };
      bind: {
        base: FoundryNumericField;
      };
      control: {
        base: FoundryNumericField;
      };
    };
  };

  domine: {
    kiSkills: [];
    nemesisSkills: [];
    arsMagnus: [];
    martialArts: [];
    creatures: [];
    specialSkills: [];
    techniques: [];
    seals: {
      minor: {
        earth: {
          isActive: boolean;
        };
        metal: {
          isActive: boolean;
        };
        wind: {
          isActive: boolean;
        };
        water: {
          isActive: boolean;
        };
        wood: {
          isActive: boolean;
        };
      };
      major: {
        earth: {
          isActive: boolean;
        };
        metal: {
          isActive: boolean;
        };
        wind: {
          isActive: boolean;
        };
        water: {
          isActive: boolean;
        };
        wood: {
          isActive: boolean;
        };
      };
    };
    martialKnowledge: {
      used: FoundryNumericField;
      max: FoundryNumericField;
    };
    kiAccumulation: {
      strength: {
        accumulated: FoundryNumericField;
        base: FoundryNumericField;
        final: FoundryNumericField;
      };
      agility: {
        accumulated: FoundryNumericField;
        base: FoundryNumericField;
        final: FoundryNumericField;
      };
      dexterity: {
        accumulated: FoundryNumericField;
        base: FoundryNumericField;
        final: FoundryNumericField;
      };
      constitution: {
        accumulated: FoundryNumericField;
        base: FoundryNumericField;
        final: FoundryNumericField;
      };
      willPower: {
        accumulated: FoundryNumericField;
        base: FoundryNumericField;
        final: FoundryNumericField;
      };
      power: {
        accumulated: FoundryNumericField;
        base: FoundryNumericField;
        final: FoundryNumericField;
      };
      generic: FoundryMaximumField;
    };
  };

  psychic: {
    psychicPotential: {
      base: FoundryNumericField;
      final: FoundryNumericField;
    };
    psychicProjection: {
      base: FoundryNumericField;
      final: FoundryNumericField;
    };
    psychicPoints: FoundryMaximumField;
    psychicPowers: [];
    psychicDisciplines: [];
    mentalPatterns: [];
    innatePsychicPower: {
      amount: FoundryNumericField;
    };
    innatePsychicPowers: [];
  };
};
