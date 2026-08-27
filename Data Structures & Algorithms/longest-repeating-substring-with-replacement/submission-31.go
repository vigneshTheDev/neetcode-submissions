func characterReplacement(s string, k int) int {
	freqMap := map[byte]int{}
	l, r := 0, 0

	maxf := 0
	maxLen := 0
	for r < len(s) {
		length := r - l + 1
		freqMap[s[r]]++
		maxf = max(maxf, freqMap[s[r]])
		
		for length - maxf > k {
			l++
			length = r - l + 1
			freqMap[s[l-1]]--
		}

		maxLen = max(maxLen, length)
		r++
	}
	return maxLen
}
