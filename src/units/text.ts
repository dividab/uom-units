import { Unit } from "uom";

export type Text = "Text";

// Text
// export const Text = _register(Unit.createProductUnit<q.Text>("Text", []), " ");
export const Text = Unit.createBase<Text>("Text", "Text", " ");
