import { Unit } from "uom";

export type DeltaDewPointTemperature = "DeltaDewPointTemperature";

// DeltaDewPointTemperature
export const DeltaCelsiusDewPoint = Unit.createBase<DeltaDewPointTemperature>(
  "DeltaCelsiusDewPoint",
  "DeltaDewPointTemperature",
  "dp°C"
);
export const DeltaFahrenheitDewPoint = Unit.timesNumber(
  "DeltaFahrenheitDewPoint",
  5.0 / 9.0,
  DeltaCelsiusDewPoint
);
