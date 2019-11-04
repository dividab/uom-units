import { BaseUnits } from "uom";
import * as UnitDivide from "../unit-divide";

export type CatalyticActivity = "CatalyticActivity";

/**
 * The derived unit for catalytic activity ( <code>kat</code> ).
 */
export const Katal = UnitDivide.amountOfSubstanceByDuration(
  "Katal",
  BaseUnits.Mole,
  BaseUnits.Second
);
