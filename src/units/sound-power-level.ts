import { Unit } from "uom";

export type SoundPowerLevel = "SoundPowerLevel";

// Sound power level
export const DecibelLw = Unit.createBase("DecibelLw", "SoundPowerLevel", "dB");
