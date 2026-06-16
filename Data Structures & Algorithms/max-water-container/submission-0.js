class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxWater = 0;
        let l = 0, r= heights.length - 1;

        while (l < r) {
            const water = Math.min(heights[l], heights[r]) * (r-l)
            maxWater = Math.max(maxWater, water);

            if (heights[l] < heights[r]) {
                l++
            } else {
                r--;
            }
        }
        return maxWater;
    }
}
