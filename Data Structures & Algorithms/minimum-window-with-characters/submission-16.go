func minWindow(s string, t string) string {
	l := 0
	tFreqMap := map[byte]int{}
	sFreqMap := map[byte]int{}

	minLen := len(s) + 1
	minLenStr := ""

	for i := 0; i < len(t); i++ {
		c := t[i]
		tFreqMap[c]++
	}

	need := len(tFreqMap)
	have := 0

	for r := 0; r < len(s); r++ {
		sFreqMap[s[r]]++

		if sFreqMap[s[r]] == tFreqMap[s[r]] {
			have++
		}

		for have == need {
			if minLen > r - l + 1 {
				minLen = r - l + 1
				minLenStr = s[l:r+1]
			}

			if sFreqMap[s[l]] == tFreqMap[s[l]] {
				have--
			}
			sFreqMap[s[l]]--
			l++
		}
	}

	return minLenStr
}
