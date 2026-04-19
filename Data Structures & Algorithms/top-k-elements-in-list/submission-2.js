
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {};
        const pQ = new PriorityQueue((b,a) => a.val - b.val)
        const topK = [];

        for (let n of nums) {
            freq[n] = freq[n] || 0;
            freq[n]++;
        }

        for (let _k in freq) {
            pQ.enqueue({key: _k, val: freq[_k]})
        }

        for (let i = 0; i < k; i++) {
            topK.push(pQ.dequeue().key);
        }

        return topK;
    }
}
