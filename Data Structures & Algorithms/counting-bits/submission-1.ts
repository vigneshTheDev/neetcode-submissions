class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n: number): number[] {
        const dp = new Array(n + 1).fill(0);
        let offset = 1
        for (let i = 1; i <= n; i++) {
            if (i === offset * 2) {
                offset = i
            }

            dp[i] = 1 + dp[i - offset]
        }
        return dp
    }
}
