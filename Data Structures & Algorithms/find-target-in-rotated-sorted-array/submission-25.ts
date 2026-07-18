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
                // Is target there in the left sorted half?
                if (target < nums[mid] && target >= nums[left]) {
                    right = mid
                } else {
                    left = mid + 1
                }
            } else { // Otherwise, the right half is sorted
                // Is target there in the right sorted half?
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
