
type Solution struct{}

func (s *Solution) Encode(strs []string) string {
	if len(strs) == 0 {
		return ""
	}
	out := strings.Join(strs, "\",")
	return "\"" + out + "\""
}

func (s *Solution) Decode(encoded string) []string {
	if encoded == "" {
		return []string{}
	}
	re := regexp.MustCompile("^\"|\"$")
	return strings.Split(re.ReplaceAllString(encoded, ""), "\",")
}



