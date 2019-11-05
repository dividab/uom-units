import { Unit } from "uom";

export type Viscosity = "Viscosity";

// Viscosity
export const PascalSecond = Unit.createBase<Viscosity>(
  "PascalSecond",
  "Viscosity",
  "Pa·s"
);
