class Solution:
    def numDecodings(self, s: str) -> int:
        one_step_behind = 1
        two_step_behind = 0

        out = 0

        if s[0] == '0':
            return 0

        for i in range(0, len(s)):
            current = 0
            if s[i] != '0':
                current += one_step_behind
            if i - 1 >= 0 and (
                s[i-1] == '1' or
                s[i-1] == '2' and s[i] in '0123456'
            ):
                current += two_step_behind

            out = current

            two_step_behind = one_step_behind
            one_step_behind = current

        return out