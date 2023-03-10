import { it, expect } from "vitest";
import { maxSubArray } from "@/index";

it("sum of max sub array is 6", () => {
  expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
});

it("sum of max sub array is 1", () => {
  expect(maxSubArray([1])).toBe(1);
});

it("sum of max sub array is 23", () => {
  expect(maxSubArray([5, 4, -1, 7, 8])).toBe(23);
});

it("sum of max sub array is -1", () => {
  expect(maxSubArray([-1])).toBe(-1);
});
