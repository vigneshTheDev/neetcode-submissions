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
	collected := 0
	for i := len(buckets) - 1; i >= 0 && collected < k; i-- {
		newItems := buckets[i][0:min(k - collected, len(buckets[i]))]
		collected += len(newItems)
		out = append(out, newItems...)
	}

	return out
}
