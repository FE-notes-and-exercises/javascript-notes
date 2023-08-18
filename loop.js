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

var cacti = [
  {
    name: "Saguaro",
    maxLifeExpectancy: 200,
    spines: "extremely sharp",
    flowers: true
  }, {
    name: "Prickly Pear",
    maxLifeExpectancy: 20,
    spines: "few or spineless",
    flowers: true
  }, {
    name: "Goldern Barrel Cactus",
    maxLifeExpectancy: 30,
    spines: "long, yellow-white",
    flowers: true
  }, {
    name: "Organ Pipe Cactus",
    maxLifeExpectancy: 150,
    spines: "dark brown-black",
    flowers: true
  }
];
function printCactiInfo() {
  for (var i = 0; i < cacti.length; i++) {
    console.log("The " + cacti[i].name + "has " + cacti[i].spines + "spines and a life expectancy of " + cacti[i].maxLifeExpectancy + " years." )
  }
}

console.log(printCactiInfo());
// 🚀 Desired Output:
// The Saguaro has extremely sharp spines and a life expectancy of 200 years.
// - printed out for each of the cacti in the array

// for ... in loops 

// example

    for (let genre in library.shelves) {
      totalCount += library.shelves[genre].length;
    }
    return  `There are a total of ${totalCount} books at the ${library.name}.`;

// will loop through library.shelves
// sets genre as the name to the specific shelf it is looping through

// In Ruby
// totalcount = 0
// library.shelves.each do |genre|
//     totalcount += genre.length
// end