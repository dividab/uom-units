import { Unit } from "uom";

export type Discrete = "Discrete";

// Discrete
// export const Integer = _register(Unit.createProductUnit<q.Discrete>("Discrete", []), " ");
export const Integer = Unit.createBase<Discrete>("Integer", "Discrete", " ");
