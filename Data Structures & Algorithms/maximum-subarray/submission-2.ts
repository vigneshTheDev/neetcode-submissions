class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        let l = 0
        let max = -Infinity
        let sum = 0
        for (let r = 0; r < nums.length; r++) {
            sum = Math.max(sum + nums[r], nums[r])
            max = Math.max(max, sum)

            while(sum < 0) {
                sum -= nums[l]
                l++
            }
        }
        return max;
    }
}
