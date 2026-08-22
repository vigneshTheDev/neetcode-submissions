class Solution:
    def numDecodings(self, s: str) -> int:
        if len(s) == 0:
            return 1

        one_step_ahead = 1
        two_step_ahead = 0
        out = 0
        for i in range(len(s) - 1, -1, -1):
            current = 0
            if s[i] != '0':
                current += one_step_ahead
            
            if i + 1 < len(s) and (
                s[i] == '1' or 
                s[i] == '2' and s[i+1] in '0123456'
            ):
                current += two_step_ahead

            two_step_ahead = one_step_ahead
            one_step_ahead = current

            out = current

        return out