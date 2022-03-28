import { FoundryMaximumField } from "../fields/FoundryMaximumField";
import { FoundryCalculableField } from "../fields/FoundryCalculableField";
import { FoundryField } from "../fields/FoundryField";

export type SecondaryCharacteristics = {
  lifePoints: FoundryMaximumField;
  initiative: FoundryCalculableField;
  fatigue: FoundryMaximumField;
  movementType: {
    mod: FoundryField;
    final: FoundryField;
  };
  movement: {
    maximum: FoundryField;
    running: FoundryField;
  };
  resistances: {
    physical: FoundryCalculableField;
    disease: FoundryCalculableField;
    poison: FoundryCalculableField;
    magic: FoundryCalculableField;
    psychic: FoundryCalculableField;
  };
};
