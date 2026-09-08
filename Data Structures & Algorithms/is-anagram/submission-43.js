class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sCount = {}
        const tCount = {}

        if (s.length != t.length) return false

        for (let c of s) {
            sCount[c] = sCount[c] || 0
            sCount[c]++
        }

        for (let c of t) {
            tCount[c] = tCount[c] || 0
            tCount[c]++
        }

        for (let k in tCount) {
            if (tCount[k] !== sCount[k]) return false
        }

        return true
    }
}
