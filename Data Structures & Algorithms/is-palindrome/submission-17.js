class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i = 0;
        let j = s.length - 1;

        while (i < s.length && j >= 0 && i < j) {
            console.log(i,j)
            while(/[^a-zA-Z0-9]/.test(s[i])) i++;
            while(/[^a-zA-Z0-9]/.test(s[j])) j--;
            console.log('after', i, j)
            if (s[i]?.toLowerCase() !== s[j]?.toLowerCase()) return false;
            i++;
            j--;
        }

        return true;
    }
}
