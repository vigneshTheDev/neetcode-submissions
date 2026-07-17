class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        if (nums[0] <= nums[nums.length - 1]) {
            return nums[0]
        }

        let lo = 0, hi = nums.length

        while (true) {
            const mid = Math.floor((lo + hi) / 2)
            if (nums[mid] < nums[mid - 1]) return nums[mid]

            if (nums[mid] > nums[0]) {
                lo = mid;
            } else {
                hi = mid;
            }
        }
    }
}
