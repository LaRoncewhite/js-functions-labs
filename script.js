/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

/* const maxOfTwoNumbers = (x, y) => {
//     if (x >= y) {
//       return x;
//     } else {
//       return y;
//     }
//   }
  
//   console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
*/

/*
const isAdult = (age) => {
  if(age >= 18){
    return 'Adult' 
  } else{
    return 'Minor'
  }
}
  console.log('Exercise 2 Results:', isAdult(21))
*/

/*
const isCharAVowel = (vowel) => {
  if (vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u') {
    return true
  } else {
    return false
  }
}
console.log('Exercise 3 Results:', isCharAVowel('a'));
*/

/*
const generateEmail = (name, domain) => {
  return name + domain 
}
console.log('Exercise 4 Results:', generateEmail('joshsmith', '@example.com'))
*/
/*
const greetUser = (name, timeOfDay) => {
  return timeOfDay + name
}
console.log('Exercise 5 results:','Good', greetUser('Sam!', 'morning, '))
*/

/*
const maxOfThree = (numA, numB, numC) => {
  if(numA > numB && numA > numC){
    return numA
  } else if(numB > numA && numB > numC){
    return numB 
  } else if(numC > numA && numC > numB){
    return numC 
  } else {
    return equal
  }
} 
console.log('Exercise 6 Results:', maxOfThree(5, 10, 8))
*/

/*
const calculateTip = (amount,tipPercentage) => {
  return amount * (20 / 100)
}
console.log('Exercise 7 Results:', calculateTip(50, 20))
*/

/*
const convertTemperature = (temp, scale) => {
  if(scale === 'C'){
    return (temp * 9/5) + 32 + '(Fahrenheit)'
  }else if(scale === 'F'){
    return (temp - 32) * 5/9 + '(Celsius)'
  } else{
    return 'I Do not know'
  }
}
console.log('Exercise 8 Result:', convertTemperature(32, 'C'))
console.log('Exercise 8 Result:', convertTemperature(32, 'F'))
*/


/*
const basicCalculator = (num1, num2, operation) => {
  if(operation === 'subtract'){
    return num1 - num2
  } else if(operation === 'add'){
    return num1 + num2
  } else if(operation === 'multiply'){
    return num1 * num2
  } else if(operation === 'divide'){
    return num1 / num2 
  } else{
    return 'invalid operation' //need a string ('') because invalid operartion is not telling the computer to do anything
  }                            // a string console.logs a message
}
console.log('Exercise 9 Results:', basicCalculator(10, 5, 'subtract'))
*/