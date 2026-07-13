class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let max = 0;
        for (let i = 0; i < s.length; i++) {
            const seen = {};
            for (let j = i; j < s.length; j++) {
                const c = s[j]
                if (seen[c] == null) {
                    max = Math.max(max, j - i + 1);
                    seen[c] = true;
                } else {
                    break;
                }
            }
        }
        return max;
    }
}
