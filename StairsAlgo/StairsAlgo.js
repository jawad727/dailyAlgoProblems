//https://www.hackerrank.com/challenges/staircase/problem

// Observe that its base and height are both equal to n, and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.
// Write a program that prints a staircase of size n.

// Input: n = 4

// Output:

//    #
//   ##
//  ###
// ####


function staircase(n) {
    var hash = "#"
    var space = " "

    for (i=1; i<=n; i++) {
        console.log(space.repeat(n - i) + hash.repeat(i))
    }

}


staircase(6)