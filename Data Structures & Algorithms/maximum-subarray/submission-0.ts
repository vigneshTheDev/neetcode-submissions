class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        let max = -Infinity

        for (let i = 0; i < nums.length; i++) {
            for (let j = i; j < nums.length; j++) {
                const sum = nums.slice(i, j+1).reduce((p, c) => c + p, 0)
                max = Math.max(sum,max)
            }
        }
        return max
    }
}
