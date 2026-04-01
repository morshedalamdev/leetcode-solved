"""
7. Reverse Integer
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21
"""

INT_MIN = -2**31
INT_MAX = 2**31 - 1

class Solution:
    def reverse(self, x: int) -> int:
        sign = -1 if x < 0 else 1
        reverse_num = int(str(abs(x))[::-1]) * sign

        if reverse_num < INT_MIN or reverse_num > INT_MAX:
            return 0
        
        return reverse_num

# Example usage:
sol = Solution()

print(sol.reverse(123))
print(sol.reverse(-123))
print(sol.reverse(120))