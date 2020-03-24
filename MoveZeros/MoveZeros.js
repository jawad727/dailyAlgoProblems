// Leetcode Link: https://leetcode.com/problems/move-zeroes/

var moveZeroes = function(nums) {
    for (i=0; i<nums.length; i++) {
        if (nums[i] == 0) {
            nums.splice(i, 1)
            nums.push(0)
        }
    }
    return nums
};