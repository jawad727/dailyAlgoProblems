// Leetcode link: https://leetcode.com/problems/decode-string/submissions/


var decodeString = function(s) {
    var numStack = []
    var wordStack = []
    var num = ""
    var word = ""
    
    for (i=0; i<s.length; i++) {

        if ( s[i] == "[" ) {
            wordStack.push(word)
            numStack.push(parseInt(num))
            word = ''
            num = ''
        }
        else if (s[i] == "]") {
            word = wordStack.pop() + word.repeat(numStack.pop())
        }
        else if ( isNaN(s[i]) ) {
            word += s[i]
        }
        else if ( !isNaN(s[i]) ) {
            num += s[i]
        } 
    }
   
    return word
};