import { Serialize } from "uom";
import { Units } from "../src";

describe("serialize_test", () => {
  test("For PPM should return Units.PPM", () => {
    const unit = Serialize.stringToUnit("PPM", Units);
    expect(unit).toEqual(Units.PPM);
  });
  test("For ppm should return Units.PPM", () => {
    const unit = Serialize.stringToUnit("ppm", Units);
    expect(unit).toEqual(Units.PPM);
  });
});
