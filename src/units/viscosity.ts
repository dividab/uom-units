import { Unit } from "uom";

export type Viscosity = "Viscosity";

// Viscosity
export const PascalSecond = Unit.createBase(
  "PascalSecond",
  "Viscosity",
  "Pa·s"
);
