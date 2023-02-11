class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        dict = {} 
        for index, val in enumerate(nums):
            diff = target - val
            if diff in dict:
                return (dict[diff], index)
            dict[val] = index
        return
