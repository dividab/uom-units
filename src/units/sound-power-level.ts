import { Unit } from "uom";

export type SoundPowerLevel = "SoundPowerLevel";

// Sound power level
export const DecibelLw = Unit.createBase<SoundPowerLevel>(
  "DecibelLw",
  "SoundPowerLevel",
  "dB"
);
