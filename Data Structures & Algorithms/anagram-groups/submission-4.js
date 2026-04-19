class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = {};

        for (let s of strs) {
            const count = new Array(26).fill(0);
            for (let c of s) {
                count[c.charCodeAt(0) - 97]++;
            }

            const group_id = count.join('_');
            groups[group_id] = groups[group_id] || [];
            groups[group_id].push(s)
        }

        return Object.values(groups);
    }
}
