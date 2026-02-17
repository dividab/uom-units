import * as UnitDivide from "../unit-divide";
import { Meter } from "./base-units";
import { Siemens, MilliSiemens, MicroSiemens } from "./electric-conductance";
import { CentiMeter } from "./length";

export type ElectricConductivity = "ElectricConductivity";

// ElectricConductivity
export const SiemensPerMeter = UnitDivide.ElectricConductanceByLength(
  "SiemensPerMeter",
  Siemens,
  Meter
);

export const MicroSiemensPerCentimeter = UnitDivide.ElectricConductanceByLength(
  "MicroSiemensPerCentimeter",
  MicroSiemens,
  CentiMeter
);

export const MicroSiemensPerMeter = UnitDivide.ElectricConductanceByLength(
  "MicroSiemensPerMeter",
  MicroSiemens,
  Meter
);

export const MilliSiemensPerMeter = UnitDivide.ElectricConductanceByLength(
  "MilliSiemensPerMeter",
  MilliSiemens,
  Meter
);
