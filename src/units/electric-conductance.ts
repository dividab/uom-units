import { BaseUnits } from "uom";
import * as UnitDivide from "../unit-divide";
import { Volt, MilliVolt, MicroVolt } from "./electric-potential";

export type ElectricConductance = "ElectricConductance";

/**
 * The derived unit for electric conductance ( <code>S</code> ).
 * One Siemens is equal to one ampere per volt.
 * It is named after the German engineer Ernst Werner von Siemens (1816-1892).
 */

export const Siemens = UnitDivide.electricalCurrentByElectricalPotential(
  "Siemens",
  BaseUnits.Ampere,
  Volt
);

export const MilliSiemens = UnitDivide.electricalCurrentByElectricalPotential(
  "Siemens",
  BaseUnits.Ampere,
  MilliVolt
);

export const MicroSiemens = UnitDivide.electricalCurrentByElectricalPotential(
  "Siemens",
  BaseUnits.Ampere,
  MicroVolt
);
