// Complete the function gradingStudents in the editor below. It should return an integer array consisting of rounded grades.
// HackerRank Link: https://www.hackerrank.com/challenges/grading/problem

// if the difference between the grade and the next multiple of 5 is less than three round up the grade to the next multiple of 5
// if the grade is less than 38 then node rounding will occur

function gradingStudents(grades) {

    grades.forEach(item => {
      if (item >= 38 && item % 5 != 0 ) {

        if (item % 5 > 2) {
          console.log( Math.ceil(item / 5) * 5 )
           
        } else { console.log(item) }

      } else {
        console.log(item)
      }

    })

}