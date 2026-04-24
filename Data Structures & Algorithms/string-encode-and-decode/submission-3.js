class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let out = ""
        for (let s of strs) {
            out += `${s.length}|${s}`
        }

        return out;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === '')
        return [];

        let j = 0;
        let out = [];
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '|') {
                const length = parseInt(str.slice(j, i))
                const s = str.slice(i + 1, i + length + 1)
                out.push(s);
                i = j = i + 1 + length;
            }
        }
        return out;
    }
}
