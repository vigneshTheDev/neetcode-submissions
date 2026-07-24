class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        let max = -Infinity
        let sum = 0
        for (let r = 0; r < nums.length; r++) {
            sum = Math.max(sum + nums[r], nums[r])
            max = Math.max(max, sum)
        }
        return max;
    }
}
