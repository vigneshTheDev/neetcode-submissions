class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const out = []
        for (let i = 0; i < nums.length; i++) {
            const prod = nums.reduce((p, c, j) => j === i ? p : p * c, 1)
            out.push(prod);
        }
        return out;
    }
}
