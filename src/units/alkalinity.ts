import { Unit } from "uom";

export type Alkalinity = "Alkalinity";

// Alkalinity
export const MilliGramHydrogenCarbonatePerLiter = Unit.createBase<Alkalinity>(
  "MilliGramHydrogenCarbonatePerLiter",
  "Alkalinity",
  "mg HCO₃⁻/l"
);
