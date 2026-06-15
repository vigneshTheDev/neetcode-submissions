class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0,
            r = 1;
        let maxProfit = 0;
        while (r < prices.length) {
            if (prices[r] < prices[l]) {
                l = r;
                r++;
            } else {
                const profit = prices[r] - prices[l];
                maxProfit = Math.max(maxProfit, profit);
                r++;
            }
        }
        return maxProfit;
    }
}
