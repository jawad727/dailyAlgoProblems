// Leetcode Link: https://leetcode.com/problems/multiply-strings/submissions/

var multiply = function(num1, num2) {
    var firstNum = 0
    var secondNum = 0
    var numObj = {"0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9}
    var tensArray = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000]
    
    num1.split("").forEach((item, i) => {
        firstNum = firstNum + (numObj[num1[i]] * tensArray[num1.length - i - 1])
    })
    
    num2.split("").forEach((item, i) => {
        secondNum = secondNum + (numObj[num2[i]] * tensArray[num2.length - i - 1])
    })
    
    if (num1 == 0 || num2 == 0) {
        return 0 + ""
    }
    
    return (firstNum * secondNum) + ""
};