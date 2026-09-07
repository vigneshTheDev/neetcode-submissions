class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        return this.numWays(nums, 0, 0, target, {});
    }

    numWays(nums, i, currSum, target, dp) {
        if (i === nums.length) {
            return currSum === target ? 1 : 0;
        }

        dp[i] = dp[i] || {};
        if (dp[i][currSum] != null) return dp[i][currSum];

        dp[i][currSum] =
            this.numWays(nums, i + 1, currSum + nums[i], target, dp) +
            this.numWays(nums, i + 1, currSum - nums[i], target, dp);
        return dp[i][currSum];
    }
}
