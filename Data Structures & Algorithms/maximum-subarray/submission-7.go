func maxSubArray(nums []int) int {
	if len(nums) == 0 {
		return 0
	}

    maxSum := nums[0]
	currSum := 0

	for _, num := range nums {
		currSum += num
		maxSum = max(maxSum, currSum)
		currSum = max(currSum, 0)
	}
	return maxSum
}
