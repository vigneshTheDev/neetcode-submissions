class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        let dp = {};
        dp[0] = 1;
        for (let i = 0; i < nums.length; i++) {
            const nextDp = {};
            for (let currSum in dp) {
                nextDp[+currSum + nums[i]] = nextDp[+currSum + nums[i]] || 0;
                nextDp[+currSum - nums[i]] = nextDp[+currSum - nums[i]] || 0;

                nextDp[+currSum + nums[i]] += dp[currSum];
                nextDp[+currSum - nums[i]] += dp[currSum];
            }
            dp = nextDp;
        }
        return dp[target] || 0;
    }
}
