func isAnagram(s string, t string) bool {
	tCountMap := map[rune]int{}
	sCountMap := map[rune]int{}

	if len(s) != len(t) {
		return false
	}

	for _, c := range s {
		sCountMap[c] += 1
	}

	for _, c := range t {
		tCountMap[c] += 1
	}

	for key, _ := range tCountMap {
		if tCountMap[key] != sCountMap[key]  {
		return false

		}
	}

	return true
}
