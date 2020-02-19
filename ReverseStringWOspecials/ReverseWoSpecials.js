// Reverse a string without reversing special characters

// Input:   str = "Ab,c,de!$"
// Output:  str = "ed,c,bA!$"

function 
reverseWoSpecials(string) {
  var specials = ["!", "@", "#", "$", "%", "^", "&", "*", ",", ".", "/"]
  var indexes = []
  var reverseArray = []
  var specialsArray = []

  for (i=string.length - 1; i>=0; i--) {
    if (!specials.includes(string[i])) {
      reverseArray.push(string[i])
    } else {
      indexes.push(string.indexOf(string[i]))
      specialsArray.push(string[i])
    }
  }

  for (i=0; i<indexes.length; i++) {
    reverseArray.splice(indexes[i], 0, specialsArray[i])
  }

  return reverseArray.join("")
}

reverseWoSpecials("Ab,c,de!$")