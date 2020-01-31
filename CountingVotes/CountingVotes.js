//  You've been hired to write the software to count the votes for a local election. Write a function countVotes that receives an array of 
// (unique) names, each one representing a vote for that person. Your function should return the name of the winner of the election. In the 
// case of a tie, the person whose name comes last alphabetically wins the election (a dumb rule to be sure, but the voters don't need to know).

// Example:

// input: ['veronica', 'mary', 'alex', 'james', 'mary', 'michael', 'alex', 'michael'];

// expected output: 'michael'
// Analyze the time and space complexity of your solution.

var ary = ['veronica', 'mary', 'alex', 'james', "mary", 'michael', 'alex', 'michael'];

function countVotes(arr) {
    var names = {}
    winner = ""
    record = 0
    for (i=0; i<arr.length; i++) {
      if (!names[arr[i]]) {
        names[arr[i]] = 0
      }
      names[arr[i]] += 1
          if (names[arr[i]] > record) {
        record = names[arr[i]];
        winner = arr[i];
      } else if (names[arr[i]] === record) {
        if (arr[i] > winner) winner = arr[i];
      }
    }
    return(winner)
  }
  
  countVotes(ary)