class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {};
        for (let num of nums) {
            freq[num] = freq[num] || 0;
            freq[num]++;
        }
        const buckets = new Array(nums.length + 1).fill(null).map(() => []);
        for (let n in freq) {
            const count = freq[n];
            buckets[count].push(n);
        }

        const out = [];
        for (let i = buckets.length - 1; i >= 0; i--) {
            out.push(...buckets[i].slice(0, k - out.length));

            if (out.length === k) break;
        }
        return out
    }
}
