class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let max = nums[0]
        let curr = 0
        for (let num of nums) {
            curr = Math.max(curr + num, num)
            max = Math.max(curr, max)
        }
        return max
    }
}
