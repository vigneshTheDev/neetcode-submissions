func longestConsecutive(nums []int) int {
	lengths := make(map[int]int, len(nums))
	longest := 0

	for _, num := range nums {
		if _, found := lengths[num]; found {
			continue

		}
		length := 1 + lengths[num - 1] + lengths[num + 1]

		lengths[num] = length
		lengths[num - lengths[num - 1]] = length
		lengths[num + lengths[num + 1]] = length
		
		longest = max(longest, length)
	}

	return longest
}
