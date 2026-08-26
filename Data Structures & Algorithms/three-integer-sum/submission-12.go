import "slices"

func threeSum(nums []int) [][]int {
	slices.Sort(nums)
	var prevNum *int
	out := [][]int{}
	for i := 0; i < len(nums); i++ {
		if prevNum != nil && *prevNum == nums[i] {
			continue;
		}

		if prevNum == nil {
			prevNum = new(int)
		}

		*prevNum = nums[i]
		target := -nums[i]
		l := i + 1
		r := len(nums) - 1

		for l < r {
			sum := nums[l] + nums[r]

			if sum == target {
				out = append(out, []int{nums[i], nums[l], nums[r]})
				l++
				r--
				for l < r && nums[l] == nums[l-1] {
					l++
				}
				for r > l && nums[r] == nums[r+1] {
					r--
				}
			} else if sum > target {
				r--
			} else {
				l++
			}
		}
	}
	return out
}
