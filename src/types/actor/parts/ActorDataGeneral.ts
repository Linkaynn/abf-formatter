import { FoundryNumericField } from "../fields/FoundryNumericField";
import { FoundryCalculableField } from "../fields/FoundryCalculableField";
import { AspectData } from "./AspectData";

export type ActorDataGeneral = {
  modifiers: {
    physicalActions: FoundryNumericField;
    allActions: FoundryCalculableField;
    naturalPenalty: {
      byArmors: FoundryNumericField;
      byWearArmorRequirement: FoundryNumericField;
    };
  };
  destinyPoints: FoundryCalculableField;
  presence: FoundryNumericField;
  aspect: AspectData;
  advantages: [];
  contacts: [];
  inventory: [];
  money: {
    cooper: FoundryNumericField;
    silver: FoundryNumericField;
    gold: FoundryNumericField;
  };
  description: FoundryNumericField;
  disadvantages: [];
  elan: [];
  experience: {
    current: FoundryNumericField;
    next: FoundryNumericField;
  };
  languages: {
    base: FoundryNumericField;
    others: [];
  };
  levels: [];
  notes: [];
  titles: [];
};
