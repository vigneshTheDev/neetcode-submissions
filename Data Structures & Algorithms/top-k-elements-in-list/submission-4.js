class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {}
        for (let n of nums) {
            freq[n] = freq[n] || 0;
            freq[n]++;
        }

        return Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, k).map(a => a[0])
    }
}
