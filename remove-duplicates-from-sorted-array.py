# --- PROBLEM ---
"""
26. Remove Duplicates from Sorted Array

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.

The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.
"""


# --- SOLUTION ---
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        k = 0

        for i in range(len(nums)):
            if nums[i] != nums[k]:
                k += 1
                nums[k] = nums[i]

        print(k + 1)


# --- TESTS ---
solution = Solution()
solution.removeDuplicates([1, 1, 2])  # 2
solution.removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])  # 5
