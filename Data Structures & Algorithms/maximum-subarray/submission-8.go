func maxSubArray(nums []int) int {
	if len(nums) == 0 {
		return 0
	}

    maxSum := nums[0]
	currSum := 0

	for _, num := range nums {
		currSum = max(currSum + num, num)
		maxSum = max(maxSum, currSum)
	}
	return maxSum
}
