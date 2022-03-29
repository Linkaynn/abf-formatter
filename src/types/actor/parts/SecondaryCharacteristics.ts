import { FoundryMaximumField } from "../fields/FoundryMaximumField";
import { FoundryCalculableField } from "../fields/FoundryCalculableField";
import { FoundryNumericField } from "../fields/FoundryNumericField";

export type SecondaryCharacteristics = {
  lifePoints: FoundryMaximumField;
  initiative: FoundryCalculableField;
  fatigue: FoundryMaximumField;
  movementType?: {
    mod: FoundryNumericField;
    final: FoundryNumericField;
  };
  movement?: {
    maximum: FoundryNumericField;
    running: FoundryNumericField;
  };
  resistances: {
    physical: FoundryCalculableField;
    disease: FoundryCalculableField;
    poison: FoundryCalculableField;
    magic: FoundryCalculableField;
    psychic: FoundryCalculableField;
  };
};
