// return true if the string given contains the words in the array with none overlapping

var word = "cars"
var arr = ["car","ca","rs"]

var wordBreak = function(s, wordDict) {
    var word = s
    
    for (i=0; i<wordDict.length; i++) {
        if (word.includes(wordDict[i])) {
            word = word.split(wordDict[i])
            word = word.join("")
        }
    }
    
    return word.length == 0
};

wordBreak(word, arr)