func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	var counts [26]int

	for _, c := range s {
		counts[c - 'a']++
	}

	for _, c := range t {
		counts[c - 'a']--

		if counts[c - 'a'] < 0 {
			return false
		}
	}

	return true
}
