func isPalindrome(s string) bool {
	re := regexp.MustCompile("[^a-zA-Z0-9]")
	sNormalized := strings.ToLower(re.ReplaceAllString(s, ""))
	left := 0
	right := len(sNormalized) - 1

	for left <= right {
		if sNormalized[left] != sNormalized[right] {
			return false
		}
		left++
		right--
	}

	return true
}
