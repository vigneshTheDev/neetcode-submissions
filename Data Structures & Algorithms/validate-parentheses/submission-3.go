func isValid(s string) bool {
	stack := []rune{}
	closerMap := map[rune]rune{
		'(': ')',
		'[': ']',
		'{': '}',
	}
	for _, c := range s {
		if _, isOpeningBracket := closerMap[c]; isOpeningBracket {
			stack = append(stack, c)
		} else {
			if len(stack) == 0 {
				return false
			}
			
			b := stack[len(stack) - 1]
			stack = stack[:len(stack) - 1]
			if c != closerMap[b] {
				return false
			}
		}
	}
	return len(stack) == 0
}
