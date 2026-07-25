class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n: number): number {
        let out = 0;
        while (n) {
            if (n & 1) out++
            n = n >> 1
        }
        return out
    }
}
