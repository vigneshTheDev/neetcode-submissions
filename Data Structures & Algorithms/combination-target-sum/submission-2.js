class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];
        this.dfs(nums, target, 0, [], 0, res);
        return res;
    }
    dfs(nums, target, curr, candidate, total, res) {
        if (total === target) return res.push(candidate);

        if (curr >= nums.length) return;
        if (total > target) return;

        this.dfs(nums, target, curr, [...candidate, nums[curr]], total + nums[curr], res);
        this.dfs(nums, target, curr + 1, candidate, total, res);
    }
}
