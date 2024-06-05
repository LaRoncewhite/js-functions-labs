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
const isCharAVowel = () => {
  if(isCharAVowel === 'a' || isCharAVowel === 'e' || isCharAVowel === 'i' || isCharAVowel === 'o' || isCharAVowel === 'u') {
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
console.log('Exercise 4 Results:', generateEmail('joshsmith', 'example.com'))
*/

const greetUser = (name, timeOfDay) => {
  return timeOfDay + name
}
console.log('Exercise 5 results:','Good', greetUser('Sam', 'morning'))