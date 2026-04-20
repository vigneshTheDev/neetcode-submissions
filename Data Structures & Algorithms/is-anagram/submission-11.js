class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const seen = {};
        if (s.length !== t.length) return false;

        for (let c of s) {
            seen[c] = seen[c] || 0;
            seen[c]++;
        }

        for (let c of t) {
            if (!seen[c]) return false;

            seen[c]--;
        }

        return true;
    }
}
