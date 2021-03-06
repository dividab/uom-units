import { ConversionTest } from "./conversion-test";
import { Units } from "../..";

export const tests: ReadonlyArray<ConversionTest> = [
  {
    name: "0Celsius_0Fahrenheit",
    fromUnit: Units.DeltaCelsius,
    fromValue: 0.0,
    toUnit: Units.DeltaFahrenheit,
    toValue: 0.0,
  },
];
