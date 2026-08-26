import "slices"

func threeSum(nums []int) [][]int {
	slices.Sort(nums)
	out := [][]int{}

	for i := 0; i < len(nums); i++ {
		if i > 0 && nums[i-1] == nums[i] {
			continue
		}

		if nums[i] > 0 {
			break
		}

		l := i + 1
		r := len(nums) - 1

		for l < r {
			sum := nums[i] + nums[l] + nums[r]

			if sum == 0 {
				out = append(out, []int{nums[i], nums[l], nums[r]})
				l++
				r--
				for l < r && nums[l] == nums[l-1] {
					l++
				}
			} else if sum > 0 {
				r--
			} else {
				l++
			}
		}
	}
	return out
}
