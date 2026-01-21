import { Unit, BaseUnits } from "uom";
import * as UnitTimes from "../unit-times";
import { Newton } from "./force";

export type Torque = "Torque";

export const NewtonMeter = UnitTimes.forceByLengthTorque(
  "NewtonMeter",
  Newton,
  BaseUnits.Meter
);
export const PoundForceFoot = Unit.timesNumber(
  "PoundForceFoot",
  1.3558179483,
  NewtonMeter
);
