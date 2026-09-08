class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = {}
        for (let str of strs) {
            const counts = new Array(26).fill(0);
            for (let c of str) {
                counts[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
            }
            const key = counts.join(',')
            groups[key] = groups[key] || []
            groups[key].push(str)
        }
        return Object.values(groups)
    }
}
