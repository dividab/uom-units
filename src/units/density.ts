import { BaseUnits } from "uom";
import * as UnitDivide from "../unit-divide";
import { CubicMeter, CubicCentiMeter, CubicFeet, Liter } from "./volume";
import { Gram, Slug, PoundLb } from "./mass";
import { Kilogram } from "./base-units";

export type Density = "Density";

// Density
export const KilogramPerCubicMeter = UnitDivide.massByVolume(
  "KilogramPerCubicMeter",
  BaseUnits.Kilogram,
  CubicMeter
);
export const GramPerCubicCentiMeter = UnitDivide.massByVolume(
  "GramPerCubicCentiMeter",
  Gram,
  CubicCentiMeter
);
export const SlugPerCubicFeet = UnitDivide.massByVolume(
  "SlugPerCubicFeet",
  Slug,
  CubicFeet
);
export const PoundPerCubicFoot = UnitDivide.massByVolume(
  "PoundPerCubicFoot",
  PoundLb,
  CubicFeet
);
export const KilogramPerLiter = UnitDivide.massByVolume(
  "KilogramPerLiter",
  Kilogram,
  Liter
);
