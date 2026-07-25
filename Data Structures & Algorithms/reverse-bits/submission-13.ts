class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n: number): number {
        console.log(n.toString(2).split('').reverse().join(''))
        return parseInt(n.toString(2).padStart(32, '0').split('').reverse().join(''), 2)
    }
}
