class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = {}
        for (let str of strs) {
        const freq = new Array(26).fill(0)
        for (let c of str) 
        freq[c.codePointAt(0) - 'a'.codePointAt(0)]++

        const key = freq.join(',')
        groups[key] = groups[key] || []
        groups[key].push(str)
        }
        return Object.values(groups)



    }
}
