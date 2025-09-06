/*_________________________________DECISION MAKING_________________________________*/
console.log("Example : DECISION MAKING")

//LEAP YEAR CHECKER
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}
// Example
console.log("Example : leap year")
console.log(isLeapYear(2024)); // true
console.log(isLeapYear(1900)); // false



//TICKET PRICING
function ticketPrice(age) {
  if (age <= 12) {
    return 10;
  } else if (age <= 17) {
    return 15;
  } else {
    return 20;
  }
}
// Example
console.log("Example : tckect price")
console.log(ticketPrice(10)); // 10
console.log(ticketPrice(16)); // 15
console.log(ticketPrice(25)); // 20


//CLOTHING ADVICE
function clothingAdvice(temperature, isRaining) {
  let advice;
  switch (true) {
    case (temperature <= 0):
      advice = isRaining ? "Wear a heavy coat and waterproof boots." 
                         : "Wear a heavy coat, gloves, and hat.";
      break;
    case (temperature <= 15):
      advice = isRaining ? "Wear a jacket and carry an umbrella." 
                         : "Wear a jacket or sweater.";
      break;
    case (temperature <= 25):
      advice = isRaining ? "Wear light clothes and carry a raincoat." 
                         : "Wear comfortable clothes.";
      break;
    default:
      advice = "Wear shorts and a t-shirt, stay hydrated!";
  }
  return advice;
}
// Example usage:
console.log("Example : clothing advice")
console.log(clothingAdvice(10, true));  // "Wear a jacket and carry an umbrella."
console.log(clothingAdvice(30, false)); // "Wear shorts and a t-shirt, stay hydrated!"



/*___________________________________________RECURSION__________________________________________*/

console.log("Example : RECURSION")

//FIBONACCI SEQUENCE
function fibonacci(n) {
  if (n === 0) return 0; // base case
  if (n === 1) return 1; // base case
  return fibonacci(n - 1) + fibonacci(n - 2);
}
// Example
console.log("Example : fibonacci")
console.log(fibonacci(6)); // 8




//PALINDROME
function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // clean string
  if (str.length <= 1) return true; // base case
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, -1)); // recursive call
}
// Example
console.log("Example : palindrome")
console.log(isPalindrome("Racecar")); // true
console.log(isPalindrome("Hello"));   // false




//POWER FUNCTION
function power(base, exp) {
  if (exp === 0) return 1; // base case
  return base * power(base, exp - 1);
}
// Example
console.log("Example : power function")
console.log(power(2, 3)); // 8

