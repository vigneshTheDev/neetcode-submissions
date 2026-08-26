func lengthOfLongestSubstring(s string) int {
	lastLocation := map[rune]int{}
	maxLength := min(1, len(s))
	l, r := 0, 0
	for r < len(s) {
		if i, found := lastLocation[rune(s[r])]; found {
			l = max(i + 1, l)
		}
		lastLocation[rune(s[r])] = r
		maxLength = max(maxLength, r - l + 1)
		r++
	}

	return maxLength
}
