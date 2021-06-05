// 1.
//  Using the filter method, filter out the sedans.
// output =>
//  { brand: 'Toyota', model: 'camry', type: 'sedan' },
//   { brand: 'Hyundai', model: 'Sonata', type: 'sedan' }
const carBrands = [
  { brand: "Ford", model: "mustang", type: "convertible" },
  { brand: "Toyota", model: "camry", type: "sedan" },
  { brand: "Ram", model: "1500", type: "pickup" },
  { brand: "Hyundai", model: "Sonata", type: "sedan" },
  { brand: "Jeep", model: "wrangler", type: "suv" },
  { brand: "Nissan", model: "frontier", type: "pickup" },
];

//1. solution      
let sedans = carBrands.filter(function (car) {
  return car.type === "sedan";
});
sedans.forEach(car => console.log(car));


/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */

//2. solution
function reverseString(string) {
  let result = "";
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result;
}
console.log(reverseString('test 123'));


// 3.
// Using Reduce,
// Given an array of all your wishlist items, figure out
// how much it would cost to just buy everything at once
// In other words, the total of all the prices in the array
// of objects
// The output should eqaute to 227005

let wishlist = [
  { title: "tesla", price: 90000 },
  { title: "tesla", price: 45000 },
  { title: "tesla", price: 5 },
  { title: "tesla", price: 2000 },
  { title: "tesla", price: 90000 },
];


//3. solution
function shop(arr) {
  return arr.reduce((total, current) => total + current.price, 0);
}
console.log(shop(wishlist));


// 4.
//Explain recursion in your own words,
// give an example of a recursive algorithm, and explain how it works
//Make sure to detail the steps that make up a recursive algorithm
// A detailed explanation.

//4. solution
//recursion is when a function keeps calling itself until a given termination condition is met 

//example 1 of recursion 
function countDown(number) {
  if (number === 0) {
    return 'lift off!';
  }
  else if(number > 0){
  console.log(number);
  return countDown(number - 1);
  }
  else {
    console.log('please enter an integer');
  }
}
console.log(countDown(5));

//how this function works:
// function takes in a number as input 
// test to see if number is equal to 0
// If number equals 0 it will return the string 'lift off!', ending the function
// If the number is > 0 the number will be logged to the console 
// If the number is > 0 countDown will be called again, 
// being passed the given number -1 as the number input parameter
// This means countDown will keep calling itself until the number parameter = 0, when it will not run again
//recursion example 3

//example 2 of recursion 
let result = "";
function recursiveReverseString(str) {
  if (str.length == 0) {
    return result;
  }
  //add last char to result 
  result += str.slice(str.length - 1);

  //remove last char from string
  str = str.slice(0, str.length - 1);

  //call function again 
  return recursiveReverseString(str);
}
console.log(recursiveReverseString('foo bar'));

// I converted the reverseString function from exercise #2 to use recursion 
// function takes string as argument
// if the string length is 0, function returns result
// otherwise, the last character of the string is saved cumulatively to result
// and str value is reassigned to its characters minus the last character
// then recursiveReverseString is called again, passing the updated str value as argument
// so recursiveReverseString runs until the given string length is equal to 0

