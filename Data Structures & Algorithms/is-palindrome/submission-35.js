class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i = 0;
        let j = s.length - 1;

        while (i < j) {
            let cl = s[i];
            let cr = s[j];
            if (
                !((cl <= "z" && cl >= "a") || (cl <= "Z" && cl >= "A") || (cl <= "9" && cl >= "0"))
            ) {
                i++;
            } else if (
                !((cr <= "z" && cr >= "a") || (cr <= "Z" && cr >= "A") || (cr <= "9" && cr >= "0"))
            ) {
                j--;
            } else {
                if (cl.toLowerCase() !== cr.toLowerCase()) {
                    return false;
                }

                i++;
                j--;
            }
        }

        return true;
    }
}
