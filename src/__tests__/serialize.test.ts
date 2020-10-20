import { Serialize } from "uom";
import { Units } from "..";
import { unitLookup } from "../unit-lookup";

describe("serialize_test", () => {
  test("For PPM should return Units.PPM", () => {
    const unit = Serialize.stringToUnit("PPM", unitLookup);
    expect(unit).toEqual(Units.PPM);
  });
  test("For ppm should return Units.PPM", () => {
    const unit = Serialize.stringToUnit("ppm", unitLookup);
    expect(unit).toEqual(Units.PPM);
  });
});
