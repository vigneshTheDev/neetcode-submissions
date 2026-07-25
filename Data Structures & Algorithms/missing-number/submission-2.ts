class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums: number[]): number {
        const n = nums.length
        let out = 0
        for (let i = 0; i <= n; i++) {
            out ^= i
            if (nums[i]) out ^= nums[i]
        }
        return out
    }
}
