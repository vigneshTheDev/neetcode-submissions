class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        hash={}
        for n in nums:
            if str(n) in hash:
                return True
            hash[str(n)] = True

        return False