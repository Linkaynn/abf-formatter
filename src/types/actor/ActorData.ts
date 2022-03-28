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
import { FoundryField } from "./fields/FoundryField";
import { FoundryMaximumField } from "./fields/FoundryMaximumField";

export type ActorData = {
  version: number;
  ui: {
    contractibleItems: {};
    tabVisibility: {
      mystic: FoundryField<boolean>;
      domine: FoundryField<boolean>;
      psychic: FoundryField<boolean>;
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
      base: FoundryField;
      final: FoundryField;
    };
    block: {
      base: FoundryField;
      final: FoundryField;
    };
    dodge: {
      base: FoundryField;
      final: FoundryField;
    };
    wearArmor: FoundryField;
    totalArmor: {
      at: {
        cut: FoundryField;
        impact: FoundryField;
        thrust: FoundryField;
        heat: FoundryField;
        electricity: FoundryField;
        cold: FoundryField;
        energy: FoundryField;
      };
    };
    combatSpecialSkills: [];
    combatTables: [];
    ammo: [];
    weapons: [];
    armors: [];
  };

  mystic: {
    act: {
      main: {
        base: FoundryField;
        final: FoundryField;
      };
      alternative: {
        base: FoundryField;
        final: FoundryField;
      };
    };
    zeon: {
      accumulated: number;
      value: number;
      max: number;
    };
    zeonRegeneration: {
      base: FoundryField;
      final: FoundryField;
    };
    innateMagic: {
      main: FoundryField;
      alternative: FoundryField;
    };
    magicProjection: {
      base: FoundryField;
      final: FoundryField;
      imbalance: {
        offensive: {
          base: FoundryField;
          final: FoundryField;
        };
        defensive: {
          base: FoundryField;
          final: FoundryField;
        };
      };
    };
    magicLevel: {
      spheres: {
        essence: FoundryField;
        water: FoundryField;
        earth: FoundryField;
        creation: FoundryField;
        darkness: FoundryField;
        necromancy: FoundryField;
        light: FoundryField;
        destruction: FoundryField;
        air: FoundryField;
        fire: FoundryField;
        illusion: FoundryField;
      };
      total: FoundryField;
      used: FoundryField;
    };
    summoning: {
      summon: {
        base: FoundryField;
        final: FoundryField;
      };
      banish: {
        base: FoundryField;
        final: FoundryField;
      };
      bind: {
        base: FoundryField;
        final: FoundryField;
      };
      control: {
        base: FoundryField;
        final: FoundryField;
      };
    };
    spells: [];
    spellMaintenances: [];
    selectedSpells: [];
    summons: [];
    metamagics: [];
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
      used: FoundryField;
      max: FoundryField;
    };
    kiAccumulation: {
      strength: {
        accumulated: FoundryField;
        base: FoundryField;
        final: FoundryField;
      };
      agility: {
        accumulated: FoundryField;
        base: FoundryField;
        final: FoundryField;
      };
      dexterity: {
        accumulated: FoundryField;
        base: FoundryField;
        final: FoundryField;
      };
      constitution: {
        accumulated: FoundryField;
        base: FoundryField;
        final: FoundryField;
      };
      willPower: {
        accumulated: FoundryField;
        base: FoundryField;
        final: FoundryField;
      };
      power: {
        accumulated: FoundryField;
        base: FoundryField;
        final: FoundryField;
      };
      generic: FoundryMaximumField;
    };
  };

  psychic: {
    psychicPotential: {
      base: FoundryField;
      final: FoundryField;
    };
    psychicProjection: {
      base: FoundryField;
      final: FoundryField;
    };
    psychicPoints: FoundryMaximumField;
    psychicPowers: [];
    psychicDisciplines: [];
    mentalPatterns: [];
    innatePsychicPower: {
      amount: FoundryField;
    };
    innatePsychicPowers: [];
  };
};
