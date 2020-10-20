import { UnitMap } from "uom";
import * as Units from "../units";

const unitsLowerCase = Object.keys(Units).reduce<UnitMap.UnitMap>(
  (soFar, current) => {
    return {
      ...soFar,
      [current.toLowerCase()]: (Units as UnitMap.UnitMap)[current],
    };
  },
  {}
);
export const unitLookup: UnitMap.UnitLookup = (unitString) =>
  (unitString &&
    (unitsLowerCase as UnitMap.UnitMap)[unitString.toLowerCase()]) ||
  undefined;
