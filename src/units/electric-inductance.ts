import { BaseUnits } from "uom";
import * as UnitDivide from "../unit-divide";
import { Weber } from "./magnetic-flux";

export type ElectricInductance = "ElectricInductance";

export const Henry = UnitDivide.magneticFluxByElectricalCurrent(
  "Henry",
  Weber,
  BaseUnits.Ampere
);
