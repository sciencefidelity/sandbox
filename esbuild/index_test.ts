import { test } from "node:test";
import assert from "node:assert";
import { maxSubArray } from "./index.js";

test("sum of max sub array is 6", () => {
  assert.strictEqual(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
});

test("sum of max sub array is 1", () => {
  assert.strictEqual(maxSubArray([1]), 1);
});

test("sum of max sub array is 23", () => {
  assert.strictEqual(maxSubArray([5, 4, -1, 7, 8]), 23);
});

test("sum of max sub array is -1", () => {
  assert.strictEqual(maxSubArray([-1]), -1);
});
