import (
"slices"
"maps"
)

func groupAnagrams(strs []string) [][]string {
	groups := map[string][]string{}
	for _, str := range strs {
		runes := []rune(str)
		slices.Sort(runes)
		key := string(runes)
		groups[key] = append(groups[key], str)
	}

	return slices.Collect(maps.Values(groups))
}
