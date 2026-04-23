class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = {}
        for (let str of strs) {
            const freq = new Array(26).fill(0)
            const a = 'a'.charCodeAt(0)
            for (let c of str) {
                freq[c.charCodeAt(0) - a]++
            }
            const key = freq.join('_')
            groups[key] = groups[key] || [];
            groups[key].push(str)
        }

        return Object.values(groups);
    }
}
