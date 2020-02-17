// Leetcode Link: https://leetcode.com/problems/rotate-image/

var rotate = function(matrix) {
    var newMatrix = []
    
    for (i=0; i<matrix.length; i++) {
        var ary = []
        for (j=matrix.length - 1; j>=0; j--) {
            ary.push(matrix[j][i])
        }
        newMatrix.push(ary)
    }
    
    return newMatrix
};