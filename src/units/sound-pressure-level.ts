import { Unit } from "uom";

export type SoundPressureLevel = "SoundPressureLevel";

// Sound pressure level
export const Decibel = Unit.createBase<SoundPressureLevel>(
  "Decibel",
  "SoundPressureLevel",
  "dB"
);
