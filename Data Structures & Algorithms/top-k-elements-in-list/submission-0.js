class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqs = {}
        const buckets = {}
        const output = []

        for (const num of nums) {
            freqs[num] = freqs[num] || 0;
            freqs[num]++;
        }

        for (const num of Object.keys(freqs)) {
            const f = freqs[num];

            buckets[f] = buckets[f] || [];
            buckets[f].push(num)
        }

        let topKCount = 0;
        for (let i = nums.length; i > 0; i--) {
            const need = k - topKCount;
            const opts = [...(buckets[i] || []).slice(0, need)];
            output.push(...opts)

            topKCount += opts.length;
        }

        return output
    }
}
