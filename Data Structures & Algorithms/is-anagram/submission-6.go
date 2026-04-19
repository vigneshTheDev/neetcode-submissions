func isAnagram(s string, t string) bool {
    seen := make(map[rune]int)

    if len(s) != len(t) {
        return false
    }

    for _,c := range s {
            seen[c]++
    }

    for _, c := range t {
        if count, ok := seen[c]; !ok || count == 0 {
            return false
        }
        seen[c]--
    }

    return true
}
