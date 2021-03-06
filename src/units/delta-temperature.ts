import { Unit } from "uom";

export type DeltaTemperature = "DeltaTemperature";

// Delta temperature
export const DeltaCelsius = Unit.createBase<"DeltaTemperature">(
  "DeltaCelsius",
  "DeltaTemperature",
  "°C"
);
export const DeltaFahrenheit = Unit.timesNumber(
  "DeltaFahrenheit",
  5.0 / 9.0,
  DeltaCelsius
);
