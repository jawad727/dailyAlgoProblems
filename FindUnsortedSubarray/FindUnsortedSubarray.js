// Leetcode Link: https://leetcode.com/problems/shortest-unsorted-continuous-subarray/solution/

var findUnsortedSubarray = function(nums) {

    var sortedArr = nums.slice().sort((a, b) => (a-b))
    var from = 0
    var until = 0

    if (sortedArr.toString() == nums.toString()) {
        return 0
    }
    
    for (i=0; i<nums.length; i++) {
        if (nums[i] != sortedArr[i]) {
            from = i;
            break;
        }    
    }

    for (i=nums.length - 1; i>=0; i--) {
        if (nums[i] != sortedArr[i]) {
            until = i
            break;
        }    
    }
    
    return until - from + 1
    
};