class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n: number): number {
        let out = 0
        for (let i = 0; i < 32; i++) {
            if (n & (1 << i)) out++
        }
        return out
    }
}
