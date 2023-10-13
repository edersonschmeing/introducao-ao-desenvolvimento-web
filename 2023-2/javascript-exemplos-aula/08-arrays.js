/*

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Indexed_collections

*/

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


//refatorando apartir daqui 

//criação de arrays

let dias_da_semana = new Array();
//dias_da_semana = Array(7).fill("")//inicializa com valor padrão
dias_da_semana = new Array(7);
dias_da_semana = Array.of('Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado')

dias_da_semana = new Array('Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'); 

// criar dessa forma de preferência
dias_da_semana = [];
dias_da_semana.length = 7
dias_da_semana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']; // {3}

console.log('dias_da_semana.length', dias_da_semana.length);

for (let i = 0; i < dias_da_semana.length; i++) {
  console.log(`dias_da_semana[${i}]`, dias_da_semana[i]);
}

//Adiciona e remove elementos 

let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('tamanho do array', numeros.length)
console.log('Array original', numeros);

//imprime elemente a elemento
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

//ADICIONA

console.log('ADICIONANDO')
// adicona um novo elemento no final do array
numeros[numeros.length] = 10;
console.log('Adicionado 10 no final', numeros);

numeros.push(11);
console.log('Adicionado 11 no final com método push', numeros);

numeros.push(12, 13);
console.log('Adicionado 12 e 13 no final com método push', numeros);

//adiciona um novo elemento no início do array de forma manual
for (let i = numeros.length; i >= 0; i--) {
  numeros[i] = numeros[i - 1];
}
numeros[0] = -1;
console.log('Adicionado -1 de forma manual', numeros);

//adicona um novo elemento no início do array usando unshift
numeros.unshift(-2);
console.log('Adicionado -2 no início com método unshift', numeros);

numeros.unshift(-4, -3);
console.log('Adicionado -4 e -3 no início com método unshift', numeros);

//REMOVE
console.log('REMOVENDO')

numeros.pop();
console.log('Removido o último elemento com método pop', numeros);

numeros.length = numeros.length - 1;
console.log('Removido o último elemento manual', numeros);

delete numeros[numeros.length-1] 
numeros.length = numeros.length -1;
console.log('Removido o último elemento delete', numeros);

numeros.shift();
console.log('Removido o primeiro elemento com método shift', numeros);

//Remove o primeiro elemento do array de forma manual
for (let i = 0; i < numeros.length; i++) {
  numeros[i] = numeros[i + 1];
}
numeros.length = numeros.length -1;

console.log('Removido o primeiro elemento de forma manual', numeros);
console.log('Tamanho do array', numeros.length);

//reinicializa array
numeros = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log('Array reinicializado', numeros);


//Removendo e adicionando elementos do meio ou uma posicição específica

//médodo splice - parâmetros (index, quantas posições devem ser removidas, item1...itemN)
numeros.splice(5, 3);
console.log('Removendo 3 elementos (3, 4, 5) começando no index 5', numeros);

numeros.splice(5, 0, 2, 3, 4);
console.log('Adicionando 3 elementos (2, 3, 4) começando no index 5', numeros);

numeros.splice(5, 3, 2, 3, 4);
console.log('Removendo 3 elementos começando do index 5 e adicionando (2, 3, 4)', numeros);

//methods

/*

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

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

/*
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




*/


