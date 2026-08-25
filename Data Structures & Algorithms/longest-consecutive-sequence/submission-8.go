func longestConsecutive(nums []int) int {
	numset := map[int]bool{}

	for _, num := range nums {
		numset[num] = true
	}

	longest := 0
	for num := range numset {
		if _, found := numset[num-1]; !found {
			length := 1

			for {
				if _, exists := numset[num + length]; exists {
					length++
				} else {
					break
				}
			}
			longest = max(longest, length)
		}
	}

	return longest
}
