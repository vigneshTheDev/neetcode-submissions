func minWindow(s string, t string) string {
	l, r := 0, 1
	tFreqMap := map[byte]int{}
	sFreqMap := map[byte]int{}

	minLen := len(s) + 1
	minLenStr := ""

	for _, c := range []byte(t) {
		tFreqMap[c]++
	}

	for r <= len(s) {
		sFreqMap[s[r-1]]++
		for sFreqMap[s[l]] > tFreqMap[s[l]] && l < r - 1 {
			sFreqMap[s[l]]--
			l++
		}

		satisfies := true
		for k, _ := range tFreqMap {
			if tFreqMap[k] > sFreqMap[k] {
				satisfies = false
				break
			}
		}

		if satisfies && r-l < minLen {
			minLenStr = s[l:r]
			minLen = r - l
		}
		r++
	}

	return minLenStr
}
