import { Unit } from "uom";
import * as Units from "./units";

export function squareRootPressure(
  name: string,
  unit: Unit.Unit<Units.Pressure>
): Unit.Unit<Units.SquareRootPressure> {
  return Unit.squareRoot(name, "SquareRootPressure", unit);
}
