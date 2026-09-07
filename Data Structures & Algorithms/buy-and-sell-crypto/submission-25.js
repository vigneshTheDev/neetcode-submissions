class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minBuy = prices[0]
        let maxP = 0
        for (let p of prices) {
            maxP = Math.max(p - minBuy, maxP)
            minBuy = Math.min(minBuy, p)
        }
        return maxP
    }
}
