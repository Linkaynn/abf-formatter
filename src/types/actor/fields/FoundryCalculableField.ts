import { FoundryNumericField } from "./FoundryNumericField";

export type FoundryCalculableField = {
    base: FoundryNumericField;
    final?: FoundryNumericField;
};