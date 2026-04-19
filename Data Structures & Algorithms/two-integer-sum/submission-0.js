class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const complements = {};
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            if (complements[num] != null) {
                return [complements[num], i]
            }

            complements[target - num] = i;
        }
    }
}
