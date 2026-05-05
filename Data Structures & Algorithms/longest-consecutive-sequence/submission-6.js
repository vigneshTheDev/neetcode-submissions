class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const seqMap = {};
        let longest = 0;
        for (let n of nums) {
            if (seqMap[n]) continue;

            const newLen = seqMap[n] = (seqMap[n-1] || 0) + (seqMap[n+1] || 0) + 1;
            seqMap[n-(seqMap[n-1] || 0)] = newLen;
            seqMap[n+(seqMap[n+1] || 0) ] = newLen;
            longest = Math.max(seqMap[n], longest);
        }
        return longest;
    }
}
