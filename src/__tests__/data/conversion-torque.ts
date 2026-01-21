import { ConversionTest } from "./conversion-test";
import { Units } from "../..";

export const tests: ReadonlyArray<ConversionTest> = [
  {
    name: "1LbfFt_1.3558179483Nm",
    fromUnit: Units.PoundForceFoot,
    fromValue: 1.0,
    toUnit: Units.NewtonMeter,
    toValue: 1.3558179483,
  },
];
