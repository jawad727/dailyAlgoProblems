// Leetcode Link: https://leetcode.com/problems/divide-two-integers/submissions/

var divide = function(dividend, divisor) {
    var arr = []
    var multiplier1 = divisor / Math.abs(divisor)
    var multiplier2 = dividend / Math.abs(dividend)

    if (!multiplier1) {
      multiplier1 = 1
    }

    if (!multiplier2) {
      multiplier2 = 1
    }
    
    for (i=0; i<Math.abs(divisor); i++) {
        arr.push(0)
    }
    
    var counter = 0
    
    for (i=0; i<Math.abs(dividend); i++) {
        
        if (counter > Math.abs(divisor) - 1) {
            counter = 0
        }
        
        arr[counter] += 1
        
        counter += 1
    }
    
    return arr[arr.length - 1] * multiplier1 * multiplier2  
};