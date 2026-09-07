class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        const map = new Map()
        for (let interval of intervals) {
            const [start, end] = interval

            map.set(start, (map.get(start) || 0) + 1)
            map.set(end, (map.get(end) || 0) - 1)
        }
        const sortedKeys = [...map.keys()].sort((a, b) => a-b)
        let interval = []
        const out = []
        let have = 0
        for (let key of sortedKeys) {
            if (interval.length === 0) {
                interval.push(key)
            }
            have += map.get(key)
            if (have === 0) {
                interval.push(key);
                out.push(interval)
                interval = []
            }
        }
        return out
    }
}
