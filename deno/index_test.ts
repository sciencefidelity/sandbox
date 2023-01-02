import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import { maxSubArray } from "./index.ts";

Deno.test("sum of max sub array is 6", () => {
  assertEquals(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
});

Deno.test("sum of max sub array is 1", () => {
  assertEquals(maxSubArray([1]), 1);
});

Deno.test("sum of max sub array is 23", () => {
  assertEquals(maxSubArray([5, 4, -1, 7, 8]), 23);
});

Deno.test("sum of max sub array is -1", () => {
  assertEquals(maxSubArray([-1]), -1);
});
