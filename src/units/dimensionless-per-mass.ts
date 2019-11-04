import { Unit, BaseUnits } from "uom";
import * as UnitDivide from "../unit-divide";
import { PoundLb } from "./mass";

export type DimensionlessPerMass = "DimensionlessPerMass";

// Per mass
export const OnePerKilogram = UnitDivide.dimensionlessByMass(
  "OnePerKilogram",
  Unit.One,
  BaseUnits.Kilogram
);

export const OnePerPoundLb = UnitDivide.dimensionlessByMass(
  "OnePerPoundLb",
  Unit.One,
  PoundLb
);
