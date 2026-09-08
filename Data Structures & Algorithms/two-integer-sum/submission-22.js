class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const freq = {}
        for (let i = 0; i < nums.length; i++) {
            const comp = target - nums[i]
            if (freq[comp] != null) {
                return [freq[comp], i]
            }
            freq[nums[i]] = i
        }
        return [-1, -1]
    }
}
