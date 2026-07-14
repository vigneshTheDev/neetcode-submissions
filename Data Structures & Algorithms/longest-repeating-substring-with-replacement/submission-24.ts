class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let l = 0;
        let maxf = 0;
        let max = 0;
        let count = {};

        for (let r = 0; r < s.length; r++) {
            const c = s[r];
            count[c] = count[c] || 0;
            count[c]++;
            maxf = Math.max(maxf, count[c])

            while (r - l + 1 - maxf > k) {
                count[s[l]]--;
                l++;
            }

            max = Math.max(max, r - l + 1)
        }
        return max;
    }
}
