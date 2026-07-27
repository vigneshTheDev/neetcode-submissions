class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        let last = 1;
        let secondLast = 0;

        for (let i = n; i > 0; i--) {
            const sum = last + secondLast;
            secondLast = last;
            last = sum;
        }
        return last;
    }
}
