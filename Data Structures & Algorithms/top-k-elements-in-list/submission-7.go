func topKFrequent(nums []int, k int) []int {
	buckets := make([][]int, len(nums))
	freqMap := map[int]int{}

	for _, num := range nums {
		freqMap[num] += 1
	}

	for num, freq := range freqMap{
		buckets[freq - 1] = append(buckets[freq - 1], num)
	}

	out := []int{}
	for i := len(buckets) - 1; i >= 0; i-- {
		for _, num := range buckets[i] {
			out = append(out, num)
			if len(out) == k {
				return out
			}
		}
	}

	return out
}
