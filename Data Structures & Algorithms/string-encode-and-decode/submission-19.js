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
            const start = i + len.length + 1
            const end = start + +len
            out.push(str.slice(start, end))
            i = end + 1
        }
        return out
    }
}
