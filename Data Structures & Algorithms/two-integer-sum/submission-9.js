class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const complements = {}
        for (let i = 0; i < nums.length; i++) {
            const n = nums[i];
            const c = target - n;
            if (complements[c] != null) return [complements[c], i];

            complements[n] = i;
        }
    }
}
