class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        out = 0
        n = len(nums)

        for num in nums:
            out ^= num

        for i in range(n+1):
            out ^= i

        return out