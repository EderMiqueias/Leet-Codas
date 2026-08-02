class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        for i, n in enumerate(nums):
            for i2, n2 in enumerate(nums):
                if i == i2:
                    continue
                if n + n2 == target:
                    return [i, i2]
