class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a,b) => a[0]-b[0])
        const out = [intervals[0]]
        for (let i = 1; i < intervals.length; i++) {
            const lastEnd = out.at(-1)[1]
            if (intervals[i][0] <= lastEnd) {
                out[out.length-1][1] = Math.max(intervals[i][1], lastEnd)
            } else {
                out.push(intervals[i])
            }
        }
        return out
    }
}
