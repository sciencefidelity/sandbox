export const maxSubArray = (nums: number[]) => {
  let max = nums[0];
  let sum = 0;
  for (const num of nums) {
    sum += num;
    max = Math.max(max, sum);
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
};
