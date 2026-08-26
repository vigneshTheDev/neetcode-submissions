// Brute force
func maxProfit(prices []int) int {
	maxP := 0
	for i := 0; i < len(prices); i++ {
		for j := i + 1; j < len(prices); j++ {
			maxP = max(maxP, prices[j] - prices[i])
		}
	}
	return maxP
}
