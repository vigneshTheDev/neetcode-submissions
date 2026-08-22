class Solution:
    def numDecodings(self, s: str) -> int:
        if s[0] == '0':
            return 0
        if len(s) <= 1:
            return 1

        dp0 = 0
        dp1 = 1
        out = 0
        for i in range(len(s) - 1, -1, -1):
            out = 0
            if s[i] != '0':
                out += dp1
            if i + 1 < len(s) and (
                s[i] == '1' or 
                s[i] == '2' and s[i+1] in '0123456'
            ):
                out += dp0

            
            dp0 = dp1
            dp1 = out
        return out
            