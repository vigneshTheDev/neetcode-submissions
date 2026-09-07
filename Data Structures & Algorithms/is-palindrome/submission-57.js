class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const normalized = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase()
        let l = 0
        let r = normalized.length - 1
        while (l < r) {
            if (normalized[l] !== normalized[r]) return false

            l++
            r--
        }
        return true
    }
}
