// Function for first question
function duplicate(args) {
  if (Array.isArray(args)) {
    return [...args, ...args];
  }
  return null;
}

// Second question - for loop inside the function
function printFizzBuzz() {
  const isThreeMultiple = (num) => num && num % 3 === 0;
  const isFiveMultiple = (num) => num && num % 5 === 0;
  const isThreeAndFiveMultiple = (num) => num && num % 15 === 0;
  
  for (let i = 0; i <= 100; i++) {
    if (isThreeAndFiveMultiple(i)) {
      console.log('fizzbuzz');
    } else if (!isThreeAndFiveMultiple(i) && isThreeMultiple(i)) {
      console.log('fizz');
    } else if (!isThreeAndFiveMultiple(i) && isFiveMultiple(i)) {
      console.log('buzz');
    }
  }
}

// First question - function call
const dupl = duplicate([1, 2, 3, 4, 5]);
console.log(dupl);

// Second question - function call
printFizzBuzz();

// Third question
console.log('hello' || 'world'); // short circuit evaluated to 'hello' and prints 'hello'
console.log('foo' && 'bar'); // 'foo' is truthy therefore prints 'bar'

// Last question - IIFE executes immediately after being defined. Prints 'Hello Robin!'
(function () {
  const greeting = 'Hello';
  const name = 'Robin';
  console.log(`${greeting} ${name}!`);
})();




