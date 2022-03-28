import { FoundryField } from "../fields/FoundryField";
import { FoundryCalculableField } from "../fields/FoundryCalculableField";

export type ActorDataGeneral = {
  modifiers: {
    physicalActions: FoundryField;
    allActions: FoundryCalculableField;
    naturalPenalty: {
      byArmors: FoundryField;
      byWearArmorRequirement: FoundryField;
    };
  };
  destinyPoints: FoundryCalculableField;
  presence: FoundryField;
  aspect: {
    hair: FoundryField;
    eyes: FoundryField;
    height: FoundryField;
    weight: FoundryField;
    age: FoundryField;
    gender: FoundryField;
    race: FoundryField;
    appearance: FoundryField;
    size: FoundryField;
  };
  advantages: [];
  contacts: [];
  inventory: [];
  money: {
    cooper: FoundryField;
    silver: FoundryField;
    gold: FoundryField;
  };
  description: FoundryField;
  disadvantages: [];
  elan: [];
  experience: {
    current: FoundryField;
    next: FoundryField;
  };
  languages: {
    base: FoundryField;
    others: [];
  };
  levels: [];
  notes: [];
  titles: [];
};
