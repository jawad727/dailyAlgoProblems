// Leetcode Problem Link: https://leetcode.com/problems/letter-combinations-of-a-phone-number/submissions/

// It would be better if I could do this with more dry code, Ill look into it and update when I get a new result, until then this one works

var letterCombinations = function(digits) { 
    var retArray = [];

    var letterArray = [
     ["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"], 
     ["j", "k", "l"], ["m", "n", "o"], ["p", "q", "r", "s"], 
     ["t", "u", "v"], ["w", "x", "y", "z"] ]
    
    if (digits.length  == 4) {
        letterArray[digits[0] - 2].forEach(num1 => {
            letterArray[digits[1] - 2].forEach(num2 => {
                letterArray[digits[2] - 2].forEach(num3 => {
                    letterArray[digits[3] - 2].forEach(num4 => {
                        retArray.push(num1 + num2 + num3 + num4)
                    })
                })
            })
        })
        return retArray
    }

    if (digits.length  == 3) {
        letterArray[digits[0] - 2].forEach(num1 => {
            letterArray[digits[1] - 2].forEach(num2 => {
                letterArray[digits[2] - 2].forEach(num3 => {
                    retArray.push(num1 + num2 + num3)
                })
            })
        })
        return retArray
    }

    
    if (digits.length  == 2) {
        letterArray[digits[0] - 2].forEach(num1 => {
            letterArray[digits[1] - 2].forEach(num2 => {
                retArray.push(num1 + num2)
            })
        }) 
        
    } else if (digits.length  == 1) {
        
            return letterArray[digits[0] - 2]
        
        } else {
            
          return []
            
        }
        
    return(retArray)
    
};