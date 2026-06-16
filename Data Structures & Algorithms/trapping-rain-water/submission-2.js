class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0,
            r = height.length - 1;
        let maxL = 0,
            maxR = 0;
        let rainTrapped = 0;

        while (l < r) {
            maxL = Math.max(height[l], maxL);
            maxR = Math.max(height[r], maxR);
            if (maxL < maxR) {
                rainTrapped += maxL - height[l];
                l++;
            } else {
                rainTrapped += maxR - height[r];
                r--;
            }
        }

        return rainTrapped;
    }
}
