class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let maxF = 0;
        const freq = {};
        let l = 0;
        let maxLen = 0;
        for (let r = 0; r < s.length; r++) {
            freq[s[r]] = freq[s[r]] || 0;
            freq[s[r]]++;
            maxF = Math.max(maxF, freq[s[r]]);

            let len = r - l + 1;
            while (len - maxF > k) {
                freq[s[l]]--;
                l++;
                len = r - l + 1;
            }
            maxLen = Math.max(maxLen, len);
        }
        return maxLen;
    }
}
