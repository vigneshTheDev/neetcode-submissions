class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        console.log(s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase())
        console.log(s.replace(/[^a-zA-Z0-9]/g, "").split("").reverse().join("").toLowerCase())
        return s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase() === s.replace(/[^a-zA-Z0-9]/g, "").split("").reverse().join("").toLowerCase()
    }
}
