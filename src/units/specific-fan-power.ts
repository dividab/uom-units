import * as UnitDivide from "../unit-divide";
import { KiloWatt, Watt } from "./power";
import {
  CubicMeterPerSecond,
  CubicMeterPerHour,
  CubicFeetPerMinute,
} from "./volume-flow";

export type SpecificFanPower = "SpecificFanPower";

// Specific Fan Power
export const KiloWattPerCubicMeterPerSecond = UnitDivide.powerByVolumeFlow(
  "KiloWattPerCubicMeterPerSecond",
  KiloWatt,
  CubicMeterPerSecond
);
export const WattPerCubicMeterPerSecond = UnitDivide.powerByVolumeFlow(
  "WattPerCubicMeterPerSecond",
  Watt,
  CubicMeterPerSecond
);
export const WattPerCubicMeterPerHour = UnitDivide.powerByVolumeFlow(
  "WattPerCubicMeterPerHour",
  Watt,
  CubicMeterPerHour
);
export const KiloWattPerCubicFootPerMinute = UnitDivide.powerByVolumeFlow(
  "KiloWattPerCubicFootPerMinute",
  KiloWatt,
  CubicFeetPerMinute
);
