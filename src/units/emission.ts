import { BaseUnits } from "uom";
import { KiloWattHour } from "./energy2";
import { Megajoule, Kilojoule, KiloBtu, MegaBtu } from "./energy";
import { Gram, PoundLb, Grain } from "./mass";
import { massByEnergy } from "../unit-divide";

export type Emission = "Emission";

// Emission
export const KilogramPerKiloWattHour = massByEnergy(
  "KilogramPerKiloWattHour",
  BaseUnits.Kilogram,
  KiloWattHour
);
export const GramPerKiloWattHour = massByEnergy(
  "GramPerKiloWattHour",
  Gram,
  KiloWattHour
);

export const GrainPerKiloWattHour = massByEnergy(
  "GrainPerKiloWattHour",
  Grain,
  KiloWattHour
);


export const PoundLbPerKiloWattHour = massByEnergy(
  "PoundLbPerKiloWattHour",
  PoundLb,
  KiloWattHour
);

export const GramPerKiloJoule = massByEnergy(
  "GramPerKiloJoule",
  Gram,
  Kilojoule
)

export const GramPerMegaJoule = massByEnergy(
  "GramPerMegaJoule",
  Gram,
  Megajoule
)

export const GrainPerKiloBtu = massByEnergy(
  "GrainPerKiloBtu",
  Grain,
  KiloBtu
)

export const GrainPerMegaBtu = massByEnergy(
  "GrainPerMegaBtu",
  Grain,
  MegaBtu
)

export const PoundLbPerKiloBtu = massByEnergy(
  "PoundLbPerKiloBtu",
  PoundLb,
  KiloBtu
)

export const PoundLbPerMegaBtu = massByEnergy(
  "PoundPerMegaBtu",
  PoundLb,
  MegaBtu
)

