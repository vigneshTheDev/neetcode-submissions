func maxSubarraySumCircular(nums []int) int {
	n := len(nums)
	suffixSum := 0
	rightMax := make([]int, n + 1)
	for i := n - 1; i >= 0; i-- {
		suffixSum += nums[i]
		rightMax[i] = max(suffixSum, rightMax[i+1])
	}

	leftMax := nums[0]
	prefixSum := 0

	midMax := nums[0]
	midSum := 0
	out := nums[0]
	for i := 0; i < n; i++ {
		midSum = max(midSum, 0) + nums[i]
		midMax = max(midMax, midSum)

		prefixSum += nums[i]
		leftMax = max(prefixSum, leftMax)

		out = max(out, leftMax + rightMax[i+1], midMax)
	}

	return out
}
