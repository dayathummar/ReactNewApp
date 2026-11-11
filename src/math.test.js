
import { test, expect } from "vitest";
import { add } from "./math.js";

test("Addition test", () => {

    expect(add(10, 20)).toBe(30);

});
