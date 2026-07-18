class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let left = 0, right = nums.length

        while (left < right) {
            const mid = Math.floor((left + right) / 2)

            if (target === nums[mid]) return mid

            // Is left half sorted?
            if (nums[mid] > nums[left]) {
                if (target < nums[mid] && target >= nums[left]) {
                    right = mid
                } else {
                    left = mid + 1
                }
            } else {
                if (target > nums[mid] && target <= nums[right - 1]) {
                    left = mid + 1
                } else {
                    right = mid
                }
            }
        }

        

        return -1
    }
}
