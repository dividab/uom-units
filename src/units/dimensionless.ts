/**
 * This module re-exports Dimensionsless from Unit and adds some extra units
 */

import { Unit } from "uom";

export type Dimensionless = Unit.Dimensionless;

export const One = Unit.One;
export const Percent = Unit.divideNumber("Percent", 100.0, Unit.One);
export const PPM = Unit.divideNumber("PPM", 1000000.0, Unit.One);
