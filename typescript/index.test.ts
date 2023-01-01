import { maxSubArray } from "."

test("sum of max sub array is 6", () => {
  expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6)
})

test("sum of max sub array is 1", () => {
  expect(maxSubArray([1])).toBe(1)
})

test("sum of max sub array is 23", () => {
  expect(maxSubArray([5, 4, -1, 7, 8])).toBe(23)
})

test("sum of max sub array is -1", () => {
  expect(maxSubArray([-1])).toBe(-1)
})
