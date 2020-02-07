
var maxArea = function(height) {
    
    // iterate through the array, and compare the number youre at with each number in the array
    // whichever of the 2 numbers is the smallest, we will use for height, 
    // we will then subtract the index of our current number from the index of the comparison number to get the width
    // height and width will then be multiplied together and compared to a variable
    // if they are greater than that veriable replace it as the new highest number
    // return highestNumber
    
    var highestNumber = 0
    
    for (i=0; i<height.length; i++) {
        
        for (j=height.length - 1; j>i; j--) {
            var currentHeight = 0
            var width = 0
            
            if (height[i] >= height[j]) {
                currentHeight = height[j]
            } else {
                currentHeight = height[i]
            }
            
            width = j - i
            
            if (width * currentHeight > highestNumber) {
                highestNumber = width * currentHeight
            }
            
            
        }
    }
    
    return highestNumber
    
};