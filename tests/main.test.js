import { compare } from "../src/main";
import { test, expect } from "vitest";

test("compare function should work", () => {
  expect(compare(1, 2)).toBe(-1);
  expect(compare(2, 1)).toBe(1);
  expect(compare(1, 1)).toBe(0);
});
