// Leetcode Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/

var removeDuplicates = function(nums) {

    for (i=nums.length; i>=0; i--) {
        if (nums[i] == nums[i+1]) {
            nums.splice(i, 1)
        }
    }
    
    return nums
};