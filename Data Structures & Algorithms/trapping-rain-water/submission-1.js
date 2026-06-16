class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0, r = height.length - 1;
        let maxL = 0, maxR = 0;
        let rainTrapped = 0;

        while (l < r) {
            maxL = Math.max(height[l], maxL)
            maxR = Math.max(height[r], maxR)
            if (maxL < maxR) {
                rainTrapped += Math.max(0, maxL - height[l])
                l++;
            } else {
                rainTrapped += Math.max(0, maxR - height[r])
                r--;
            }
        }

        return rainTrapped
    }
}
