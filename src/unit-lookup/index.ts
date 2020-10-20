import { Unit } from "uom";
import * as Units from "../units";

const unitsLowerCase = Object.keys(Units).reduce<Unit.UnitMap>(
  (soFar, current) => {
    return {
      ...soFar,
      [current.toLowerCase()]: (Units as Unit.UnitMap)[current],
    };
  },
  {}
);
export const unitLookup: Unit.UnitLookup = (unitString) =>
  (unitString && (unitsLowerCase as Unit.UnitMap)[unitString.toLowerCase()]) ||
  undefined;
