// Leetcode Problem: https://leetcode.com/problems/longest-palindromic-substring/

var longestPalindrome = function(s) {
    var subLength = 0
    var theWord = ""
    for (i=0; i<s.length; i++) {
      for (j=s.length - 1; j>=0; j--) {

        if (s.slice(i, j) == s.slice(i, j).split("").reverse().join("")  ) {
          if (s.slice(i, j).length > subLength ) {
            subLength = s.slice(i, j).length
            theWord = s.slice(i, j)
          }
        }
      }
    }


      return theWord
    

};