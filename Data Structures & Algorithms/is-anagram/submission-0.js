class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const visited_s = {};
        const visited_t = {};

        for (let c of s) {
            visited_s[c] = visited_s[c] || 0;
            visited_s[c]++;
        }

        for (let c of t) {
            visited_t[c] = visited_t[c] || 0;
            visited_t[c]++;
        }

        for (let c of t) {
            if (visited_s[c] !== visited_t[c]) return false
        }

        return true;
    }
}
