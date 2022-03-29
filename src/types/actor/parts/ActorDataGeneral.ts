import { FoundryNumericField } from "../fields/FoundryNumericField";
import { AspectData } from "./AspectData";

export type ActorDataGeneral = {
  presence: { base: FoundryNumericField };
  aspect: AspectData;
  money: {
    cooper: FoundryNumericField;
    silver: FoundryNumericField;
    gold: FoundryNumericField;
  };
};
