func twoSum(nums []int, target int) []int {
    compliments := map[int]int{}

	for i, num := range nums {
		if j, ok := compliments[target - num]; ok {
			return []int{j,i}
		}
		compliments[num] = i
	}
	return []int{-1, -1}
}
