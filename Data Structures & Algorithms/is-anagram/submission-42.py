from collections import defaultdict
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        s_count = defaultdict(int)
        t_count = defaultdict(int)

        if len(s) != len(t):
            return False

        for c in s:
            s_count[c] += 1

        for c in t:
            t_count[c] += 1

        for c  in s_count:
            if s_count[c] != t_count[c]:
                return False
        
        return True