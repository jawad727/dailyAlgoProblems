

var scores = [100, 50, 40, 20, 10]
var alice =   [5, 25, 50, 120]
// Output:     6, 4, 2, 1

// Complete the climbingLeaderboard function below.
function climbingLeaderboard(scores, alice) {
    var sortedList = new Set(scores.sort((a, b) => {return b - a}))
    
    for (i=0; i<alice.length; i++) {
  
      var tracker = 1
  
      for (j=0; j<[...sortedList].length; j++) {
  
          if (alice[i] == [...sortedList][j]) {
            tracker = j + 1
          }
  
          if (alice[i] < [...sortedList][j]) {
            tracker = j + 2
          }
          
      }
  
      console.log(tracker)
    }
  
  }
  
  climbingLeaderboard(scores, alice)