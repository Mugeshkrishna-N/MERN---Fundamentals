console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5

// Function declaration
hoistedFunction(); // Output: "Function is hoisted"
function hoistedFunction() {
  console.log("Function is hoisted");
}
//Hoisting - a variable or function will be declared above its usage