class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const normalizedString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        return normalizedString === normalizedString.split("").reverse().join("");
    }
}
