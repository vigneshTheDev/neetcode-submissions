class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const out = []
        for (let s of strs) {
            out.push(s.length, s)
        }
        return out.join(',')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str.length === 0) return []

        let i = 0
        const out = []
        while (i < str.length) {
            const len = str.slice(i).match(/([0-9]+),/)[1]
            out.push(str.slice(i + len.length + 1, i + len.length + 1 + +len))
            i+= len.length + +len + 2
        }
        return out
    }
}
