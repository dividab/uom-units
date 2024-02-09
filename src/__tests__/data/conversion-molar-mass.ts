import { ConversionTest } from "./conversion-test";
import { Units } from "../..";

export const tests: ReadonlyArray<ConversionTest> = [
  {
    name: "0KilogramPerMol_0GramPerMol",
    fromUnit: Units.KilogramPerMol,
    fromValue: 0.0,
    toUnit: Units.GramPerMol,
    toValue: 0.0,
  },
  {
    name: "0KilogramPerMol_2.2PoundLbPerMol",
    fromUnit: Units.KilogramPerMol,
    fromValue: 1.0,
    toUnit: Units.PoundLbPerMol,
    toValue: 2.2046226218487757,
  },
];
