// Leetcode Link: https://leetcode.com/problems/integer-to-roman/submissions/

var intToRoman = function(num) {
    var romanArr = []
    var romanObj = { 
      "9": ["IX", "XC", "CM"],
      "8": ["VIII", "LXXX", "DCCC"],
      "7": ["VII", "LXX", "DCC"],
      "6": ["VI", "LX", "DC"],
      "5": ["V", "L", "D"],
      "4": ["IV", "XL", "CD"], 
      "3": ["III", "XXX", "CCC", "MMM"],
      "2": ["II", "XX", "CC", "MM"], 
      "1": ["I", "X", "C", "M"]}
    var stringNum = num.toString();
       
    for (i=0; i<stringNum.length; i++) {
       if (stringNum[i] != "0") {
         romanArr.push( romanObj[stringNum[i]] [stringNum.length - i - 1] )
       } 
     } 
 
     return romanArr.join("")  
 };