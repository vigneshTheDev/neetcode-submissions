class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const out = [];
        for (let str of strs) {
            let group = [];
            for (let o of out) {
                if (this.isAnagram(str, o[0])) {
                    group = o;
                }
            }
            group.push(str);

            if (group.length === 1) {
                out.push(group)
            }
        }
        return out;
    }

    isAnagram(s, t) {
        const freq_s = {};
        const freq_t = {};

        if (s.length !== t.length) {
            return false;
        }

        for (let c of s) {
            freq_s[c] = freq_s[c] || 0;
            freq_s[c]++;
        }

        for (let c of t) {
            freq_t[c] = freq_t[c] || 0;
            freq_t[c]++;
        }

        for (let c of t) {
            if (freq_s[c] != freq_t[c]) {
                return false;
            }
        }

        return true;
    }
}
