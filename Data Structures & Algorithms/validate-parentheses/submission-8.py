class Solution:
    def isValid(self, s: str) -> bool:
        openToClose = {
            '{':'}',
            '(':')',
            '[':']'
        }
        stack = []
        for c in s:
            if c in openToClose:
                stack.append(c)
            elif len(stack) > 0:
                o = stack.pop()
                if openToClose[o] != c:
                    return False
            else:
                return False

        return len(stack) == 0
