void main() {
  print(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
  print(maxSubArray([1]));
  print(maxSubArray([5, 4, -1, 7, 8]));
  print(maxSubArray([-1]));
}

int maxSubArray(List<int> nums) {
  var curr = nums[0];
  var best = nums[0];
  for (var i = 1; i < nums.length; i++) {
    if (curr + nums[i] > nums[i]) {
      curr = curr + nums[i];
    } else {
      curr = nums[i];
    }
    if (curr > best) {
      best = curr;
    }
  }
  return best;
}
