// To run this file, in terminal
// node loops.js 


// FOR LOOPS
// for ([initialExpression]; [condition]; [incrementExpression]) {
//   statement
// }

// example
var fruits = ['apples', 'oranges', 'bananas'];

for (var i = 0; i < fruits.length; i++) {
  console.log("I have some " + fruits[i]);
}
// expected output
// "I have some apples"
// "I have some oranges"
// "I have some bananas"


// -------------------------------------------
var animals = [
  { name: 'Suzy', type: 'dog' },
  { name: 'Bob', type: 'parrot' },
  { name: 'Pepper', type: 'cat' },
  { name: 'Izzy', type: 'rabbit' }
];

function findTheCat() {
  // should loop through the array until it finds the cat and then return the cat's name.
  for (var i = 0; i < animals.length; i++){
    if (animals[i].type == 'cat'){
      return animals[i].name;
    }
  }
}

console.log(findTheCat());
// expected output: "Pepper"

// -------------------------------------------