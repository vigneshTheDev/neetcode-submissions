func maxProfit(prices []int) int {
	l := 0
	r := min(1, len(prices) - 1)
	maxP := 0

	for l < r && r < len(prices) {
		maxP = max(maxP, prices[r] - prices[l])
		if prices[l] > prices[r] {
			l = r
		}
		r++
	}
	return maxP
}
