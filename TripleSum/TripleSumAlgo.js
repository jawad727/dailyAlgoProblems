// find all triplets in an array that sum up to a given number

// Input: [12, 3, 1, 2, -6, 5, -8, 6], 0
// Expected Output: [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

// 3 7 4 are repeating for some reason 1 5 6

// var input = [12, 3, 1, 2, -6, 5, -8, 6]
var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15]

function TripleSum(array, sum) {
  var subArr = []
  for (let i=0; i<array.length; i++) {
    // console.log(`/// ${i}`)
    var repeatChecker = []
    for (let j=array.length - 1; j>i; j--) {
      // console.log(`/${j}`)
      for (let k= i; k<array.length; k++) {
        if (j != k && i != k && !repeatChecker.includes(array[k])) {
        //  console.log(`${k}`)
         if (array[i] + array[j] + array[k] == sum) {
           var sortedArr = [array[i], array[j], array[k]]
           subArr.push(sortedArr.sort(function(a, b){return a-b}) )
         }
        }
      }
      repeatChecker.push(array[j])
    }
  }
  return subArr

}

TripleSum(input, 30)