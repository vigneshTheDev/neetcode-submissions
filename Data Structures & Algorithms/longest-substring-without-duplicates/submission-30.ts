class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let max = 0;
        let seen = {};

        let l = 0;
        let r = 0;

        while(l < s.length && r < s.length) {
            const c = s[r];

            if (seen[c] != null) {
                l = Math.max(seen[c] + 1, l);
            } 
            max = Math.max(max, r - l + 1);
            seen[c] = r;
            r++;
        }

        return max;
    }
}
