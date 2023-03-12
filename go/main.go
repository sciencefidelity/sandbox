package main

import "fmt"

func maxSubArray(nums []int) int {
	curr, best := nums[0], nums[0]
	for i := 1; i < len(nums); i++ {
		if curr+nums[i] > nums[i] {
			curr = curr + nums[i]
		} else {
			curr = nums[i]
		}
		if curr > best {
			best = curr
		}
	}
	return int(best)
}

func main() {
	fmt.Println(maxSubArray([]int{-2, 1, -3, 4, -1, 2, 1, -5, 4}))
	fmt.Println(maxSubArray([]int{1}))
	fmt.Println(maxSubArray([]int{5, 4, -1, 7, 8}))
	fmt.Println(maxSubArray([]int{-1}))
}
