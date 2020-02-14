// In linear time, search this array and return it filled with sub arrays of 2 different values that add up to the target number

var arr = [0, 1, 2, 3, 4, 5, 6, 7]

function twoNumberSum(arr, target) {
  var obj = {}
  var finalArr = []
  var noRepeats = []
  for (i=0; i<arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = arr[i]
    }
  }
  for (i=0; i<arr.length; i++) {
    var looking = target - arr[i]
    if (obj[looking] && !noRepeats.includes(arr[i])) {
      finalArr.push( [arr[i] , looking] )
      noRepeats.push(arr[i])
       noRepeats.push(looking)
    }
  }
  return finalArr
}
twoNumberSum(arr, 5)