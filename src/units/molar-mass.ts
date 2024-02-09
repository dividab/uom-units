import { BaseUnits } from "uom";
import * as UnitDivide from "../unit-divide";
import { Gram, PoundLb } from "./mass";

export type MolarMass = "MolarMass";

export const KilogramPerMol = UnitDivide.massByMolarMass(
  "KilogramPerMol",
  BaseUnits.Kilogram,
  BaseUnits.Mole
);

export const GramPerMol = UnitDivide.massByMolarMass(
  "GramPerMol",
  Gram,
  BaseUnits.Mole
);

export const PoundLbPerMol = UnitDivide.massByMolarMass(
  "PoundLbPerMol",
  PoundLb,
  BaseUnits.Mole
);
