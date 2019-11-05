/**
 * This module re-exports all the base units for backwards compability
 */

import { Unit, BaseUnits } from "uom";

export type Dimensionless = Unit.Dimensionless;
export const One = Unit.One;

export const Ampere = BaseUnits.Ampere;
export const Candela = BaseUnits.Candela;
export const Kelvin = BaseUnits.Kelvin;
export const Kilogram = BaseUnits.Kilogram;
export const Meter = BaseUnits.Meter;
export const Mole = BaseUnits.Mole;
export const Second = BaseUnits.Second;
