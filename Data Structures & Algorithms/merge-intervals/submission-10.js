class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        const out = [intervals[0]]
        for (let i = 1; i < intervals.length; i++) {
            const lastEnd = out[out.length-1][1]
            if (intervals[i][0] <= lastEnd) {
                out[out.length - 1][1] = Math.max(lastEnd, intervals[i][1])
            } else {
                out.push(intervals[i])
            }
        }
        return out;
    }
}
