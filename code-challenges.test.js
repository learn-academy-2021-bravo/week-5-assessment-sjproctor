// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with an expect statement using the variables provided.

describe("codedMessage", () => {
  test("takes in a string and returns a coded message", () => {
    var secretCodeWord1 = "Lackadaisical"
    // Expected output: "L4ck4d41s1c4l"
    var secretCodeWord2 = "Gobbledygook"
    // Expected output: "G0bbl3dyg00k"
    var secretCodeWord3 = "Eccentric"
    // Expected output: "3cc3ntr1c"
    expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
  })
})

// b) Create the function that makes the test pass.

// create a function called codedMessage
// parameter a string
// iterate through every character in the string
// split string into an array
// map over the array
// conditional to check for character that is a/A return 4
// conditional to check for character that is e/E return 3
// conditional to check for character that is i/I return 1
// conditional to check for character that is o/O return 0
// else return the character
// join and return

const codedMessage = (string) => {
  let splitString = string.split("")
  // splitString: ["L", "a", "c", "k", "a", "d", "a", "i", "s", "i", "c", "a", "l"]
  return splitString.map(value => {
    if(value === "a" || value === "A"){
      return 4
    } else if(value === "e" || value === "E"){
      return 3
    } else if(value === "i" || value === "I"){
      return 1
    } else if(value.toLowerCase() === "o"){
      return 0
    } else {
      return value
    }
  }).join("")
  // return of map function: ["L", "4", "c", "k", "4", "d", "4", "1", "s", "1", "c", "A", "l"]
}

// Create a function
// parameter of string
// strong - replace regular expression
// made an object called chars of the values and the numbers to be changed
// return string with replaceAll(/[aeio]/ig, m => chars[m])


// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.

describe("returnA", () => {
  test("takes in an array and returns all the words that contain the letter a", () => {
    var arrayOfWords1 = ["Apple", "Banana", "Plum", "Cherry", "Kiwi"]
    // Expected output: ["Apple", "Banana"]
    var arrayOfWords2 = ["Mango", "Orange", "Apricot", "Blueberry", "Peach"]
    // Expected output: ["Mango", "Orange", "Apricot", "Peach"]
    expect(returnA(arrayOfWords1)).toEqual(["Apple", "Banana"])
    expect(returnA(arrayOfWords2)).toEqual(["Mango", "Orange", "Apricot", "Peach"])
  })
})

// b) Create the function that makes the test pass.

// create a function called returnA
// parameter - array
// filter through the array
// check if value includes a
// dropped the value to lowercase to check the a
// return filtered array

const returnA = (array) => {
  return array.filter(value => {
    return value.toLowerCase().includes("a")
  })
}

// Another option with regex
// const returnA = (array) => {
//   return array.filter(value => {
//     return value.match(/a/i)
//   })
// }



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.

describe("fullHouse", () => {
  test("takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
    var hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    var hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    var hand3 = [5, 5, 5, 5, 4]
    // Expected output: false
    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
  })
})

// b) Create the function that makes the test pass.

// create a function called fullHouse
// parameter - array
// iterate through the array
// create a object to keep track of the elements
// loop through the array create a key in the object from the value in the array
// increment the key for every instance of the value
// check the object values into an array
// check if the array length is greater than 2
// does the array have a value of 3 and 2
// return boolen

// Options 1:
const fullHouse = (array) => {
  let map = {}
  for(let element of array){
    map[element] = ++map[element] || 1
  }
  const resultArray = Object.values(map)
  if(resultArray.length > 2){
    return false
  }
  return resultArray.includes(3) && resultArray.includes(2)
}

// Option 2:
// const fullHouse = (array) => {
//   let handObject = {}
//   for(let n of array){
//     handObject[n] = (handObject[n] || 0) + 1
//   }
//   let vals = Object.values(handObject)
//   if((vals[0] === 2 && vals[1] === 3) || (vals[0] === 3 && vals[1] === 2)){
//     return true
//   } else {
//     return false
//   }
// }

// Option 3:
// const fullHouse = (array) => {
//   let counts = array.map((value, index, arr) => {
//     return arr.filter(val => (val === value)).length
//   })
//   return counts.includes(3) && counts.includes(2) ? true : false
// }

// Option 4:
// const fullHouse = (array) => {
//   let secondCard = null
//   let hand = {
//     card1: 0,
//     card2: 0
//   }
//   array.forEach(value => {
//     if(value === array[0]){
//       hand.card1 += 1
//     } else {
//       secondCard = value
//     }
//   })
//   array.forEach(value => {
//     if(value === secondCard){
//       hand.card2 += 1
//     }
//   })
//   if(hand.card1 === 2 && hand.card2 == 3){
//     return true
//   } else if(hand.card1 === 3 && hand.card2 == 2){
//     return true
//   } else {
//     return false
//   }
// }
