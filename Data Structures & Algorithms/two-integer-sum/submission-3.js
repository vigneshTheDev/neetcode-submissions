class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const m = {};
        for (let i = 0; i < nums.length; i++) {
            m[nums[i]] = i;
        }

        for (let i = 0; i < nums.length; i++) {
            if (m[target - nums[i]] && i !== m[target - nums[i]]) {
                return [i, m[target - nums[i]]];
            }
        }
    }
}
