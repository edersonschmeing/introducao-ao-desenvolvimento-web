/*
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Indexed_collections


const arr1 = new Array(elemento0, elemento1, ..., elementoN);
const arr2 = Array(elemento0, elemento1, ..., elementoN);
const arr3 = [elemento0, elemento1, ..., elementoN];

*/
const array01 = [] //usar essa forma
const array02 = Array()
const array03 = new Array()

//var arr = new Array(12); // 12 é o tamanho do array
//var arr = Array(15); // 15 é o tamanho do array
//var arr = [];
//arr.length = 12; // 12 tamanho do vetor

console.log("\ntypeof da variável")
console.log('typeof array01:', typeof array01); // array
console.log('typeof array02:', typeof array02); // array
console.log('typeof array03:', typeof array03); // array

//declarando e prechendo um array
const array04 = [1, 2, 3]
const array05 = Array.of(1, 2, 3)

//declarando e prechendo uma matriz
const array2d = [
                  [1, 2, 3],
                  [4, 5, 6],
                  [7, 8, 9]
                ]

console.log("\nmatriz")
console.log(array2d[0][0]) //1 matriz
console.log(array2d[2][0]) //7 matriz

console.log("\nmatriz linha")
console.log(array2d[0]) //1
console.log(array2d[1]) //2
console.log(array2d[2]) //3

//inicializar um array 
console.log("\ninicializa array com tamanho e valor padrão")
let array06 = Array(12).fill(0)
console.log(array06)


//tamanho do array
const array07 = [1, 2, 3, 4]
console.log("\ntamanho do array")
console.log(array07.length) //4
console.log("novo tamanho do array")
array07.length = 3
console.log(array07.length) //3


//adicionar um item no final de um array
console.log("\nadicionar um item a um array")
array07.push(4)
console.log(array07)


//adicionar um item a um array no início
console.log("\nadicionar um item no começo de um array")
array07.unshift(0)
console.log(array07)
console.log("\nadicionar dois itens no começo de um array")
array07.unshift(-2, -1)
console.log(array07)


//remover um item no final de um array 
console.log("\nremover um item no final de um array")
array07.pop(array07)
console.log(array07)

console.log("\nremover um item no início de um array")
array07.shift()
console.log(array07)


//Como unir dois ou mais arraysarray07
console.log("\nconcatena dois arrays")
const array08 = [10,11]
const array09 = array07.concat(array08) //[1,2,3,4
console.log(array07)
console.log(array08)
console.log(array09)


console.log("\nconcatena dois arrays usando spread (...)")
const array10 = [15,16]
console.log(array09)
console.log(array10)
const array11 = [...array10, ...array09]
console.log(array11)


console.log("\ninteração em arrays")
var cores = ["vermelho", "verde", "azul"];
for (var i = 0; i < cores.length; i++) {
  console.log(cores[i]);
}

cores.forEach(function (cor) {
  console.log(cor);
});

//ES6 Arrow Functions(funções seta)
cores.forEach((cor) => console.log(cor));

console.log("\nordenção de arrays")
console.log(cores.sort)

// inicia no índice 1 e extrai todos os elementos
var meu_array = new Array("a", "b", "c", "d", "e");
meu_array = meu_array.slice(1, 4); 
// até o índice 3, retornado [ "b", "c", "d"]
console.log(meu_array)

/*
array11.find((15, indice, array) => {
  console.log(indice)
})
*/


//CREAÇÃO DE ARRAYS

let daysOfWeek = new Array(); // {1}

daysOfWeek = new Array(7); // {2}

daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'); // {3}

// preferred
daysOfWeek = [];

daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; // {3}

console.log('daysOfWeek.length', daysOfWeek.length);

for (let i = 0; i < daysOfWeek.length; i++) {
  console.log(`daysOfWeek[${i}]`, daysOfWeek[i]);
}

// fibonacci numbers
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
const fibonacci = []; // {1}
fibonacci[1] = 1; // {2}
fibonacci[2] = 1; // {3}

for (let i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; // //{4}
}

for (let i = 1; i < fibonacci.length; i++) { // {5}
  console.log(`fibonacci[${i}]`, fibonacci[i]); // {6}
}

// instead of {5} and {6} we can simply use
console.log('fibonacci', fibonacci);



//ADD E REMOVE ELEMENTOS

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log('Original array', numbers);

function printArray(myArray) {
  for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
  }
}

/****************************** Inserting an element in the end of the Array */

// add a new element to the numbers array
numbers[numbers.length] = 10;
console.log('Add 10 to the end', numbers);

numbers.push(11);
console.log('Add 11 with push', numbers);

numbers.push(12, 13);
console.log('Add 12 and 13 with push', numbers);


// insert first position manually
Array.prototype.insertFirstPosition = function(value) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = value;
};

numbers.insertFirstPosition(-1);
console.log('Add -1 with insertFirstPosition', numbers);
// printArray(numbers);

// using method unshift
numbers.unshift(-2);
console.log('Add -2 with unshift', numbers);
//printArray(numbers);

numbers.unshift(-4, -3);
console.log('Add -4 and -3 with unshift', numbers);
// printArray(numbers);

// ************** Removing elements

numbers.pop();
console.log('Removed last value with pop', numbers);

for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i + 1];
}

console.log('Removed first value manually', numbers);
console.log('Lenght after value removed manually', numbers.length);

//reset array
numbers = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

Array.prototype.reIndex = function(myArray) {
  const newArray = [];
  for(let i = 0; i < myArray.length; i++ ) {
    if (myArray[i] !== undefined) {
      // console.log(myArray[i]);
      newArray.push(myArray[i]);
    }
  }
  return newArray;
}

// remove first position manually and reIndex
Array.prototype.removeFirstPosition = function() {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }
  return this.reIndex(this);
};

numbers = numbers.removeFirstPosition();
console.log('Removed first with removeFirstPosition + reIndex', numbers);

// using method shift
numbers.shift();
console.log('Removed first with shift', numbers);
console.log('Lenght after removed first with shift', numbers.length);

//* *** Removing and Adding elements from the middle of the array or specific position
// splice method - parameter (index, howManyPositionsToBeRemoved, item1...itemX)
numbers.splice(5, 3);
console.log('Removing 3 elements (3, 4, 5) starting index 5', numbers);

numbers.splice(5, 0, 2, 3, 4);
console.log('Adding 3 elements (2, 3, 4) starting index 5', numbers);

numbers.splice(5, 3, 2, 3, 4);
console.log('Removing 3 elements starting index 5 and adding (2, 3, 4)', numbers);





//arrays dois D e multi D

let averageTempDay1 = [72, 75, 79, 79, 81, 81];
let averageTempDay2 = [81, 79, 75, 75, 73, 72];

let averageTemp = [];

// same as
averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 73];

function printMatrix(myMatrix) {
  for (let i = 0; i < myMatrix.length; i++) {
    for (let j = 0; j < myMatrix[i].length; j++) {
      console.log(myMatrix[i][j]);
    }
  }
}

// printMatrix(averageTemp);
console.log('averageTemp two-dimensional array:');

// same as

// day 1
averageTemp[0] = [];
averageTemp[0][0] = 72;
averageTemp[0][1] = 75;
averageTemp[0][2] = 79;
averageTemp[0][3] = 79;
averageTemp[0][4] = 81;
averageTemp[0][5] = 81;
// day 2
averageTemp[1] = [];
averageTemp[1][0] = 81;
averageTemp[1][1] = 79;
averageTemp[1][2] = 75;
averageTemp[1][3] = 75;
averageTemp[1][4] = 73;
averageTemp[1][5] = 73;

// printMatrix(averageTemp);
console.table(averageTemp);

//* * Multidimensional Matrix

// Matrix 3x3x3 - Cube

const matrix3x3x3 = [];
for (let i = 0; i < 3; i++) {
  matrix3x3x3[i] = [];
  for (let j = 0; j < 3; j++) {
    matrix3x3x3[i][j] = [];
    for (let z = 0; z < 3; z++) {
      matrix3x3x3[i][j][z] = i + j + z;
    }
  }
}

for (let i = 0; i < matrix3x3x3.length; i++) {
  for (let j = 0; j < matrix3x3x3[i].length; j++) {
    for (let z = 0; z < matrix3x3x3[i][j].length; z++) {
      console.log(matrix3x3x3[i][j][z]);
    }
  }
}

// user-friendly-output
const matrix3x3x3Output = [];
for (let i = 0; i < 3; i++) {
  matrix3x3x3Output[i] = [];
  for (let j = 0; j < 3; j++) {
    matrix3x3x3Output[i][j] = `[${matrix3x3x3[i][j].join(', ')}]`;
  }
}
console.log('matrix3x3x3 three-dimensional array:');
console.table(matrix3x3x3Output);




//methods


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//* ********* using for..of loop
for (const n of numbers) {
  console.log(`for..of loop: ${n} % 2 === 0`, n % 2 === 0 ? 'even' : 'odd');
}

//* ********* Using the new ES6 iterator (@@iterator)
console.log('Using the new ES6 iterator (@@iterator)');

let iterator = numbers[Symbol.iterator]();
console.log('iterator.next().value', iterator.next().value); // 1
console.log('iterator.next().value', iterator.next().value); // 2
console.log('iterator.next().value', iterator.next().value); // 3
console.log('iterator.next().value', iterator.next().value); // 4
console.log('iterator.next().value', iterator.next().value); // 5

// or use code below
iterator = numbers[Symbol.iterator]();
for (const n of iterator) {
  console.log(`${n} of iterator`, n);
}

//* ********* Array entries, keys and values
console.log('Array entries, keys and values');

console.log('Array.entries');
let aEntries = numbers.entries(); // retrieve iterator of key/value
console.log('aEntries.next().value', aEntries.next().value); // [0, 1] - position 0, value 1
console.log('aEntries.next().value', aEntries.next().value); // [1, 2] - position 1, value 2
console.log('aEntries.next().value', aEntries.next().value); // [2, 3] - position 2, value 3

// or use code below
aEntries = numbers.entries();
for (const n of aEntries) {
  console.log(`entry of ${n}`, n);
}

console.log('Array.keys');
const aKeys = numbers.keys(); // retrieve iterator of keys
console.log('aKeys.next()', aKeys.next()); // {value: 0, done: false } done false means iterator has more values
console.log('aKeys.next()', aKeys.next()); // {value: 1, done: false }
console.log('aKeys.next()', aKeys.next()); // {value: 2, done: false }

console.log('Array.values - Only Edge and Safari - Oct 2017');
// const aValues = numbers.values();
// console.log(aValues.next()); // {value: 1, done: false } done false means iterator has more values
// console.log(aValues.next()); // {value: 2, done: false }
// console.log(aValues.next()); // {value: 3, done: false }

//* ********* Using the from method
console.log('Using the from method');

const evens = Array.from(numbers, x => x % 2 === 0);
console.log('Array.from(numbers, x => x % 2 === 0)', evens);

const numbers2 = Array.from(numbers);
console.log('Array.from(numbers)', numbers2);

//* ********* Using Array.of
console.log('Using Array.of');

const numbers3 = Array.of(1);
const numbers4 = Array.of(1, 2, 3, 4, 5, 6);
const numbersCopy = Array.of(...numbers4);
console.log('Array.of(1)', numbers3);
console.log('Array.of(1, 2, 3, 4, 5, 6)', numbers4);
console.log('Array.of(...numbers4)', numbersCopy);

//* ********* Using the fill method
console.log('Using the fill method');

numbersCopy.fill(0);
console.log('numbersCopy.fill(0)', numbersCopy);

numbersCopy.fill(2, 1);
console.log('numbersCopy.fill(2, 1)', numbersCopy);

numbersCopy.fill(1, 3, 5);
console.log('numbersCopy.fill(1, 3, 5)', numbersCopy);

const ones = Array(6).fill(1);
console.log('Array(6).fill(1)', ones);

//* ********* Using the copyWithin method
console.log('Using the copyWithin method');

let copyArray = [1, 2, 3, 4, 5, 6];
console.log('copyArray', copyArray);

copyArray = copyArray.copyWithin(0, 3); // pos 3 value is copied to pos 0
console.log('copyArray.copyWithin(0, 3)', copyArray);

copyArray = [1, 2, 3, 4, 5, 6];
copyArray = copyArray.copyWithin(1, 3, 5); // pos 3-4 values are copied to pos 1-2
console.log('copyArray.copyWithin(1, 3, 5)', copyArray);

//* ********* methods find and findIndex
console.log('methods find and findIndex');

function multipleOf13(element) {
  return element % 13 === 0;
}

console.log('numbers.find(multipleOf13)', numbers.find(multipleOf13));
console.log('numbers.findIndex(multipleOf13)', numbers.findIndex(multipleOf13));

//* ********* EcmaScript 2016 (ES7): using the method includes
console.log('EcmaScript 2016 (ES7): using the method includes');

console.log('numbers.includes(15)', numbers.includes(15));
console.log('numbers.includes(20)', numbers.includes(20));

const numbers5 = [7, 6, 5, 4, 3, 2, 1];
console.log('numbers5.includes(4, 5)', numbers5.includes(4, 5));



//sort


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log('numbers', numbers);


numbers = numbers.reverse();
console.log('numbers.reverse()', numbers);

console.log('numbers.sort()', numbers.sort());

/* console.log(
  numbers.sort(function(a, b) {
    return a - b;
  })
); */ // ES5 syntax

console.log('numbers.sort((a, b) => a - b)', numbers.sort((a, b) => a - b));

function compare(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

console.log('numbers.sort(compare)', numbers.sort(compare));

// Sorting objects
const friends = [
  { name: 'John', age: 30 },
  { name: 'Ana', age: 20 },
  { name: 'Chris', age: 25 }, // trailing comma ES2017
];

function comparePerson(a, b) {
  if (a.age < b.age) {
    return -1;
  }
  if (a.age > b.age) {
    return 1;
  }
  return 0;
}

console.log('friends.sort(comparePerson)', friends.sort(comparePerson));

let names = ['Ana', 'ana', 'john', 'John'];
console.log('names', names);
console.log('names.sort()', names.sort());

names = ['Ana', 'ana', 'john', 'John']; // reset to array original state
console.log('names.sort(compareFunction)', names.sort((a, b) => {
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  }
  if (a.toLowerCase() > b.toLowerCase()) {
    return 1;
  }
  return 0;
}));
names = ['Ana', 'ana', 'john', 'John']; // reset to array original state
console.log('names.sort((a, b) => a.localeCompare(b))', names.sort((a, b) => a.localeCompare(b)));

const names2 = ['Maève', 'Maeve'];
console.log('names2', names);
console.log('names2.sort((a, b) => a.localeCompare(b))', names2.sort((a, b) => a.localeCompare(b)));






//searching

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log('numbers', numbers);

//* ** toString
console.log('numbers.toString()', numbers.toString());

console.log('numbers.indexOf(10)', numbers.indexOf(10));
console.log('numbers.indexOf(100)', numbers.indexOf(100));

numbers.push(10);
console.log('push 10: numbers.lastIndexOf(10)', numbers.lastIndexOf(10));
console.log('push 10: numbers.lastIndexOf(100)', numbers.lastIndexOf(100));

const numbersString = numbers.join('-');
console.log('numbers.join("-")', numbersString);