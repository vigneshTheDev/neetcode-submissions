func missingNumber(nums []int) int {
    n := len(nums)
    out := 0
    for _, num := range nums {
        out ^= num
    }
    for i := 0; i <= n; i++ {
        out ^= i
    }
    return out
}
