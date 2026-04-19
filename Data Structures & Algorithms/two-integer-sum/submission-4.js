class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const prevMap = {};

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (prevMap[diff] != null) return [prevMap[diff], i];

            prevMap[nums[i]] = i;
        }
    }
}
