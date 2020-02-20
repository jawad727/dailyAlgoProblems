// Leetcode Link: 

function convert(s, numRows) {
    var res = ["", "", ""]
    var row = 0
    // console.log(res)
  
    for (i=0; i<s.length; i++) {
      res[row] += s[i]
      if (row == 0) {
        var step = 1
      }
      else if (row == numRows - 1) {
        var step = -1
      }
      row += step
    }
    return res.join("")
  }

