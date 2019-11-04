import { Unit } from "uom";

export type DataAmount = "DataAmount";

/**
 * The unit for binary information ( <code>bit</code> ).
 */
export const Bit = Unit.createBase("Bit", "DataAmount", "bit");
