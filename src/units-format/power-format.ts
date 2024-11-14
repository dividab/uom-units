import { UnitFormat } from "uom";

export const Watt = UnitFormat.createUnitFormat("W", 2);
export const KiloWatt = UnitFormat.createUnitFormat("kW", 2);
export const MegaWatt = UnitFormat.createUnitFormat("MW", 0);
export const GigaWatt = UnitFormat.createUnitFormat("GW", 0);
export const BtuPerHour = UnitFormat.createUnitFormat("BTU/h", 0);
export const TonCooling = UnitFormat.createUnitFormat("tons", 2);
export const KiloBtuPerHour = UnitFormat.createUnitFormat("MBH", 1);
export const HorsePower = UnitFormat.createUnitFormat("hp", 1);
export const VoltAmpere = UnitFormat.createUnitFormat("VA", 2);
export const KiloWattHourPerYear = UnitFormat.createUnitFormat("kWh/year", 1);
