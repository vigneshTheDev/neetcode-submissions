class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const hash = new Array(26).fill(0);
        const a = 'a'.charCodeAt(0);
        for (let c of s) {
            hash[c.charCodeAt(0) - a]++;
        }

        for (let c of t) {
            hash[c.charCodeAt(0) - a]--;
        }

        return hash.every(el => el === 0);
    }
}
