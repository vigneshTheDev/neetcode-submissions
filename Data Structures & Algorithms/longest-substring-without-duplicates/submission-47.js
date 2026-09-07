class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const freq = new Map()
        let l = 0
        let maxLen = 0
        for (let r = 0; r < s.length; r++) {
            let len = r - l + 1
            freq.set(s[r], (freq.get(s[r]) || 0) + 1)
            while (freq.get(s[r]) > 1) {
                freq.set(s[l], freq.get(s[l]) - 1)
                l++
                len = r - l + 1
            }
            maxLen = Math.max(maxLen, len)
        }
        return maxLen
    }
}
