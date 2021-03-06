import { Unit } from "uom";

export type Angle = "Angle";

/**
 * The unit for plane angle quantities ( <code>rad</code> ).
 * One radian is the angle between two radii of a circle such that the length of the arc between them is equal to the radius.
 */
export const Radian = Unit.createBase<"Angle">("Radian", "Angle", "rad");

export const Degrees = Unit.timesNumber("Degrees", Math.PI / 180.0, Radian);
