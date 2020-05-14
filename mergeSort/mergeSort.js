// My attempt at merge sort, fully working

function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr
    }
  
    var middle = Math.floor(arr.length / 2)
    var left = arr.slice(0, middle)
    var right = arr.slice(middle)
    
    return sortHalves(mergeSort(left), mergeSort(right))
  }
  
  function sortHalves(left, right) {
    var finalArr = []
  
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        finalArr.push(left.shift())
      } 
      else {
        finalArr.push(right.shift())
      }
    }
  
  
    return finalArr.concat(...left, ...right)
  }
  
  
  
  mergeSort([6, 9, 7, 4, 8, 3, 1, 5, 2])