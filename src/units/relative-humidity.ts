import { Unit } from "uom";

export type RelativeHumidity = "RelativeHumidity";

export const HumidityFactor = Unit.createBase<RelativeHumidity>(
  "HumidityFactor",
  "RelativeHumidity",
  "r.H."
);

/** Factor of humidity, eg., 0.01 means 1% */
export const PercentHumidity = Unit.divideNumber(
  "PercentHumidity",
  100.0,
  HumidityFactor
);
