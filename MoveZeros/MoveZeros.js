// Leetcode Link: https://leetcode.com/problems/move-zeroes/

var moveZeroes = function(nums) {
    for (i=0; i<nums.length; i++) {
        console.log(nums)
        console.log(nums.indexOf(0))

        if (nums[nums.indexOf(0)] == 0) {
            nums.splice(nums.indexOf(0), 1)
            nums.push(0)
        }
    }
    return nums
};

moveZeroes([1, 0, 2, 3, 0, 0, 1])