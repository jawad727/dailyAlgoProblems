// Leetcode Link: https://leetcode.com/problems/maximum-subarray/

var maxSubArray = function(nums) {
    var record = 0
  
      for (i=0; i<nums.length; i++) {
        for (j=nums.length-1; j>=i; j--) {
          if (record < nums.slice(i, j + 1).reduce((a, b) => a + b)) {
            record = nums.slice(i, j + 1).reduce((a, b) => a + b)
          }
        }
      }
      
    return record
  };
  