class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        const n = nums.length
        let out = 0
        for (let num of nums) {
            out ^= num
        }

        for (let i=1;i<=n;i++) {
            out ^= i
        }
        return out
    }
}
