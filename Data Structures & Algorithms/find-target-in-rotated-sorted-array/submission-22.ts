class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let lo = 0, hi = nums.length

        while(lo < hi) {
            const mid = Math.floor((lo + hi) / 2)
            const num = nums[mid]

            if (num === target) return mid

            if (num >= nums[lo] && (target > num || target < nums[lo])) {
                lo = mid + 1
            } else if (num >= nums[lo]) {
                hi = mid
            } else if (target < num || target > nums[nums.length - 1]) {
                hi = mid
            } else {
                lo = mid + 1
            }

        }
        return -1
    }
}
