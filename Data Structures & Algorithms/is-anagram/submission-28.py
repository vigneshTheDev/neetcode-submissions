class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        countT = defaultdict(int)
        countS = defaultdict(int)
        for c in s:
            countS[c] = countS[c] + 1

        for c in t:
            countT[c] = countT[c] + 1
        
        if len(countT) != len(countS):
            return False

        for c in countT:
            if countS[c] != countT[c]:
                return False
        return True
        
        