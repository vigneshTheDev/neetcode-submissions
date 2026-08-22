class Solution:
    def rob(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0

        one_step_behind = 0
        two_step_behind = 0

        out = 0

        for i in range(0, len(nums)):
            amount_if_robbed = two_step_behind + nums[i]
            amount_if_skipped = one_step_behind

            current = max(amount_if_robbed, amount_if_skipped)

            two_step_behind = one_step_behind
            one_step_behind = current
            out = current

        return out