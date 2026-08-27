func maxSubarraySumCircular(nums []int) int {
	globalMax := nums[0]
	globalMin := nums[0]

	currMax := 0
	currMin := 0
	total := 0
	for _, num := range nums {
		currMax = max(0, currMax) + num
		currMin = min(0, currMin) + num

		globalMax = max(globalMax, currMax)
		globalMin = min(globalMin, currMin)
		total += num
	}

	if globalMax < 0 {
		return globalMax
	}

	return max(globalMax, total - globalMin)
}
