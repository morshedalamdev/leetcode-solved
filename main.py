"""
8. String to Integer (atoi)
Implement the myAtoi function that converts a string to a 32-bit signed integer.
The algorithm for myAtoi(string s) is as follows:
1. Read in and ignore any leading whitespace.
2. Check if the next character (if not already at the end of the string) is
3. '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
4. Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
5. Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no
"""

class Solution:
    INT_MIN = -2**31
    INT_MAX = 2**31-1
    def myAtoi(self, s: str) -> int:
        digits = ""
        sign = 1
        
        for i, char in enumerate(s):
            if char == " ":
                if digits:
                    break
                continue
            
            if char == "-" or char == "+":
                if digits:
                    break
                sign = -1 if char == "-" else 1
            elif char.isdigit():
                digits += char
            else: break
            
        result = int(digits) if digits else 0
        result *= sign
        
        print(max(self.INT_MIN, min(result, self.INT_MAX)))
        return("-"*25)

sol = Solution()

print(sol.myAtoi("42"))
print(sol.myAtoi(" -042"))
print(sol.myAtoi("1337c0d3"))
print(sol.myAtoi("0-1"))
print(sol.myAtoi("words and 987"))