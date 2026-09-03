class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        minBuy = prices[0]
        maxProfit = 0

        for p in prices:
            profit = p - minBuy
            maxProfit = max(maxProfit, profit)
            minBuy = min(minBuy, p)
        return maxProfit