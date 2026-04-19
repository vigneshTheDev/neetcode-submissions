class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const visited = {};
        for (let num of nums) {
            if (visited[num])
            return true;

            visited[num] = true;
        }
        return false
    }
}
