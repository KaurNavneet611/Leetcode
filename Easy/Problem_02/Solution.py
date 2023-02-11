class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return 0

        val = 0
        org = x
        while x != 0:
            val = val * 10 + x % 10
            x //= 10
        print(val)
        return val == org
