
func maxProfit(prices []int) int {
	maxP := 0
	minBuy := prices[0]

	for _, p := range prices {
		maxP = max(maxP, p - minBuy)
		minBuy = min(minBuy, p)
	}

	return maxP
}
