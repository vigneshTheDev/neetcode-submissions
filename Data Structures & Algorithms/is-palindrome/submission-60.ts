class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let l = 0;
        let r = s.length - 1;

        const a = 'a'.charCodeAt(0)
        const z = 'z'.charCodeAt(0)
        const A = 'A'.charCodeAt(0)
        const Z = 'Z'.charCodeAt(0)
        const zero = '0'.charCodeAt(0)
        const nine = '9'.charCodeAt(0)
        const isAlNum = (c: string) => {
            const cCode = c.charCodeAt(0)
            return (a <= cCode && cCode <= z) || (A <= cCode && cCode <= Z) || (zero <= cCode && cCode <= nine)
        }
        while (l < r) {
            while (l < r && !isAlNum(s[l])) l++;
            while (l < r && !isAlNum(s[r])) r--;

            if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
            l++;
            r--;
        }

        return true;
    }
}
