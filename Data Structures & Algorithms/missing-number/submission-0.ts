class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums: number[]): number {
        const n = nums.length
        for (let i = 0; i <= n; i++) {
            const found = nums.some(num => i === num)
            if (!found) return i
        }
    }
}
