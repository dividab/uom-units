import { Unit, UnitMap } from "uom";
import * as Units from "../units";

export type UnitName = keyof typeof Units;
export type Quantity = typeof Units[keyof typeof Units]["quantity"];

const lowerCase: Record<string, Unit.Unit<unknown>> = {};
const upperCase: Record<string, Unit.Unit<unknown>> = {};
for (const key of Object.keys(Units)) {
  lowerCase[key.toLowerCase()] = (Units as UnitMap.UnitMap)[key];
  upperCase[key] = (Units as UnitMap.UnitMap)[key];
}

export const unitLookup = <TQuantityName>(
  unitString: string
): Unit.Unit<TQuantityName> | undefined =>
  (upperCase[unitString] ?? lowerCase[unitString.toLowerCase()]) as
    | Unit.Unit<TQuantityName>
    | undefined;
