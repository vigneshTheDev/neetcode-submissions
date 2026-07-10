class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let max = 0;
        for (let i = 0; i < s.length; i++) {
            for (let j = i + 1; j <= s.length; j++) {
                if (!this.hasDupeChars(s.slice(i, j))) {
                    max = Math.max(max, j - i);
                }
            }
        }
        return max;
    }

    hasDupeChars(s: string): boolean {
        const hash = {};
        for (let c of s) {
            if (hash[c]) return true;
            hash[c] = true;
        }
        return false;
    }
}
