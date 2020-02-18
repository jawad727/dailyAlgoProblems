// Leetcode Link: https://leetcode.com/problems/majority-element/submissions/

var majorityElement = function(arr) {
    var obj = {}
    var counter = 0
    var finalNum = null

    for (i=0; i<arr.length; i++) {
      if (!obj[arr[i]]) {
        obj[arr[i]] = 0
      }
    }

    for (i=0; i<arr.length; i++) {
      obj[arr[i]] += 1
      if (obj[arr[i]] > counter) {
        counter = obj[arr[i]]
        finalNum = arr[i]
      }
    }

    return finalNum
};