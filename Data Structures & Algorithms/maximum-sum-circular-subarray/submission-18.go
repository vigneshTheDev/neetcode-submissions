func maxSubarraySumCircular(nums []int) int {
	n := len(nums)

	suffixMax := make([]int, len(nums) + 1)
	suffixSum := 0
	for i := n - 1; i >= 0; i-- {
		suffixSum += nums[i]
		suffixMax[i] = max(suffixMax[i+1], suffixSum)
	}

	prefixMax := nums[0]
	prefixSum := 0

	midMax := nums[0]
	midSum := 0

	bestOverall := nums[0]
	for i := 0; i < n; i++ {
		prefixSum += nums[i]
		prefixMax = max(prefixMax, prefixSum)

		midSum = max(0, midSum) + nums[i]
		midMax = max(midMax, midSum)

		wrapAroundMax := prefixMax + suffixMax[i + 1]

		bestOverall = max(bestOverall, midMax, wrapAroundMax)
	}
	return bestOverall
}
