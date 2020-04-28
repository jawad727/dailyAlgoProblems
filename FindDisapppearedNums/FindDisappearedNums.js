// Leetcode Link: https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/submissions/

var findDisappearedNumbers = function(nums) { 
    var returnArr = []
    
    for (i=1; i<=nums.length; i++) {
        if (!nums.includes(i)) {
            returnArr.push(i)
        }
    }
    
    return returnArr
};
