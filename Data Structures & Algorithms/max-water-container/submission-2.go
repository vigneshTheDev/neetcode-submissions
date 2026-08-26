func maxArea(heights []int) int {
	l := 0
	r := len(heights) - 1

	maxWater := 0

	for l < r {
		w := r - l
		h := min(heights[l], heights[r])

		maxWater = max(maxWater, w * h)

		if heights[l] < heights[r] {
			l++
		} else {
			r--
		}
	}
	return maxWater
}
