import { Unit } from "uom";

export type DewPointTemperature = "DewPointTemperature";

export const CelsiusDewPoint = Unit.createBase<DewPointTemperature>(
  "CelsiusDewPoint",
  "DewPointTemperature",
  "dp°C"
);

export const FahrenheitDewPoint = Unit.minus(
  "FahrenheitDewPoint",
  32.0,
  Unit.timesNumber("", 5.0 / 9.0, CelsiusDewPoint)
);
export const KelvinDewPoint = Unit.minus(
  "KelvinDewPoint",
  273.15,
  CelsiusDewPoint
);
