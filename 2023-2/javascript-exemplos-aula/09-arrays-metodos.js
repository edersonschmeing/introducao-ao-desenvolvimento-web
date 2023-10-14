
//criação de arrays

let dias_da_semana = new Array();
dias_da_semana = new Array(7);
dias_da_semana = new Array('Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'); 

// criar dessa forma de preferência
dias_da_semana = [];
//dias_da_semana.length = 7 pode definir o tamanho
dias_da_semana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']; // pode inicializar

console.log('dias_da_semana.length', dias_da_semana.length);

console.table(dias_da_semana);

//iteração em array
for (let i = 0; i < dias_da_semana.length; i++) { 
  console.log(`dias_da_semana[${i}]`, dias_da_semana[i]);
}

//Adiciona e remove elementos 

let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('tamanho do array', numeros.length)
console.log('Array original', numeros);

//ITERAÇÃO

//iteração em array
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

//iteração em array com método forEach
numeros.forEach(function (numero) {
  console.log(numero);
});

//função seta 
numeros.forEach( (numero) => console.log(numero) );

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

//MÉTODOS

//reset números
numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//usando for..of loop
for (const n of numeros) {
  console.log(`for..of loop: ${n} % 2 === 0`, n % 2 === 0 ? 'par' : 'impar');
}

//Usando o novo iterator (@@iterator) ES6 
console.log('Usando o novo iterator (@@iterator) ES6');

let iterator = numeros[Symbol.iterator]();
console.log('iterator.next().value', iterator.next().value); // 1
console.log('iterator.next().value', iterator.next().value); // 2
console.log('iterator.next().value', iterator.next().value); // 3
console.log('iterator.next().value', iterator.next().value); // 4
console.log('iterator.next().value', iterator.next().value); // 5

// ou pode usar o código abaixo
iterator = numeros[Symbol.iterator]();
for (const n of iterator) {
  console.log(`${n} of iterator`, n);
}

//Array entries, keys and values  
console.log('Array entries, keys and values');
console.log('Array.entries'); //array entradas
let array_entries = numeros.entries(); // recuperar iterador de chave/valor (key/value)
console.log('array_entries.next().value', array_entries.next().value); // [0, 1] - position 0, value 1
console.log('array_entries.next().value', array_entries.next().value); // [1, 2] - position 1, value 2
console.log('array_entries.next().value', array_entries.next().value); // [2, 3] - position 2, value 3

//ou pode usar o código abaixo
array_entries = numeros.entries();
for (const n of array_entries) {
  console.log(`entry of ${n}`, n);
}

console.log('Array.keys');
const array_keys = numeros.keys(); // recuperar iterator of keys (chaves)
console.log('aKeys.next()', array_keys.next()); // {value: 0, done: false } done false significa que o iterador tem mais valores
console.log('aKeys.next()', array_keys.next()); // {value: 1, done: false }
console.log('aKeys.next()', array_keys.next()); // {value: 2, done: false }

//console.log('Array.values - Only Edge and Safari - Oct 2017');
//const array_values = numeros.values();
//console.log(array_values.next()); // {value: 1, done: false } done false significa que o iterador tem mais valores
//console.log(array_values.next()); // {value: 2, done: false }
//console.log(array_values.next()); // {value: 3, done: false }


//Usando o método from 
console.log('Usando o método from');
const numeros_pares = Array.from(numeros, x => x % 2 === 0);
console.log('Array.from(numeros, x => x % 2 === 0)', numeros_pares);

const numeros2 = Array.from(numeros);
console.log('Array.from(numeros)', numeros2);

//usando o Array.of
console.log('Usando o Array.of');
const numeros3 = Array.of(1);
const numeros4 = Array.of(1, 2, 3, 4, 5, 6);
const numerosCopy = Array.of(...numeros4);
console.log('Array.of(1)', numeros3);
console.log('Array.of(1, 2, 3, 4, 5, 6)', numeros4);
console.log('Array.of(...numeros4)', numerosCopy);

//Usando o método fill
console.log('Usando o método fill');
numerosCopy.fill(0);
console.log('numerosCopy.fill(0)', numerosCopy);

numerosCopy.fill(2, 1);
console.log('numerosCopy.fill(2, 1)', numerosCopy);

numerosCopy.fill(1, 3, 5);
console.log('numbersCopy.fill(1, 3, 5)', numerosCopy);

const numeros_uns = Array(6).fill(1);
console.log('Array(6).fill(1)',numeros_uns);

//Usando o método copyWithin
console.log('Usando o método copyWithin');
let copia_array = [1, 2, 3, 4, 5, 6];
console.log('copia_array', copia_array);

copia_array = copia_array.copyWithin(0, 3); // o valor da posição 3 é copiado para a posição 0
console.log('copia_array.copyWithin(0, 3)', copia_array);

copia_array = [1, 2, 3, 4, 5, 6];
copia_array = copia_array.copyWithin(1, 3, 5); // os valores da posição 3-4 são copiados para a posição 1-2
console.log('copia_array.copyWithin(1, 3, 5)', copia_array);

//método find e findIndex
console.log('método find e findIndex');
function multiplo_de_13(elemento) {
  return elemento % 13 === 0;
}
console.log('numeros.find(multipleOf13)', numeros.find(multiplo_de_13));
console.log('numeros.findIndex(multipleOf13)', numeros.findIndex(multiplo_de_13));

//EcmaScript 2016 (ES7): usando o método includes
console.log('EcmaScript 2016 (ES7): usando o método includes');

console.log('numbers.includes(15)', numeros.includes(15));
console.log('numbers.includes(20)', numeros.includes(20));

const numeros5 = [7, 6, 5, 4, 3, 2, 1];
console.log('numeros5.includes(4, 5)', numeros5.includes(4, 5));

//Como unir dois ou mais arrays
console.log("\nconcatena dois arrays")
const numeros6 = numeros5.concat(numeros) 
console.log(numeros5)
console.log(numeros)
console.log('numeros5.concat(numeros)', numeros6)

console.log("\nconcatena dois arrays usando spread (...)")
const array10 = [15,16]
let numeros7 = [...numeros5, ...numeros]
console.log('numeros7 = [...numeros5, ...numeros]', numeros7)

// inicia no índice 1 e extrai todos os elementos
var meu_array = new Array("a", "b", "c", "d", "e");
meu_array = meu_array.slice(1, 4); 
// até o índice 3, retornado [ "b", "c", "d"]
console.log(meu_array)



//ORDENAÇÃO

//reset numeros
numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log('numeros', numeros);

numeros = numeros.reverse();
console.log('numeros.reverse()', numeros);

numeros = numeros.sort();
console.log('numeros.sort()', numeros);

/* console.log(
  numbers.sort(function(a, b) {
    return a - b;
  })
); */ // ES5 syntax

console.log('numbers.sort((a, b) => a - b)', numeros.sort((a, b) => a - b));

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
console.log('numbers.sort(compare)', numeros.sort(compare));



// Sorting objects
const amigos = [
  { nome: 'João', idade: 30 },
  { nome: 'Ana', idade: 20 },
  { nome: 'Cris', idade: 25 }, // trailing comma ES2017
];

function compare_pessoas(a, b) {
  if (a.idade < b.idade) {
    return -1;
  }
  if (a.idade > b.idade) {
    return 1;
  }
  return 0;
}

console.log('amigos.sort(compare_pessoas_person)', amigos.sort(compare_pessoas));

let nomes = ['Ana', 'ana', 'joão', 'João'];
console.log('nomes', nomes);
console.log('nomes.sort()', nomes.sort());

nomes = ['Ana', 'ana', 'joão', 'João']; // reset o array para estado original
console.log('nomes.sort(compare_function)', nomes.sort((a, b) => {
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  }
  if (a.toLowerCase() > b.toLowerCase()) {
    return 1;
  }
  return 0;
}));

nomes = ['Ana', 'ana', 'john', 'John']; // reset o array para estado original
console.log('nomes.sort((a, b) => a.localeCompare(b))', nomes.sort((a, b) => a.localeCompare(b)));

const nomes2 = ['Maève', 'Maeve'];
console.log('nomes2', nomes2);
console.log('nomes2.sort((a, b) => a.localeCompare(b))', nomes2.sort((a, b) => a.localeCompare(b)));

//PROCURANDO

/*
array11.find((15, indice, array) => {
  console.log(indice)
})
*/

//reset array
numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log('numeros', numeros);


//toString
console.log('numeros.toString()', numeros.toString());

console.log('numeros.indexOf(10)', numeros.indexOf(10));
console.log('numerosnumbers.indexOf(100)', numeros.indexOf(100));

numeros.push(10);
console.log('push 10: numeros.lastIndexOf(10)', numeros.lastIndexOf(10));
console.log('push 10: numeros.lastIndexOf(100)', numeros.lastIndexOf(100));

//coloca separador
const numerosString = numeros.join('-');
console.log('numeros.join("-")', numerosString); 

//tira separador e volta para array
const numeros_array = numerosString.split('-');
console.log('numeros.split('-')', numeros_array); 

//arrays dois D e multi D

let mediaTempDia1 = [72, 75, 79, 79, 81, 81];
let mediaTempDia2 = [81, 79, 75, 75, 73, 72];

let mediaTemp = [];

// same as
mediaTemp[0] = [72, 75, 79, 79, 81, 81];
mediaTemp[1] = [81, 79, 75, 75, 73, 73];

function printMatrix(myMatrix) {
  for (let i = 0; i < myMatrix.length; i++) {
    for (let j = 0; j < myMatrix[i].length; j++) {
      console.log(myMatrix[i][j]);
    }
  }
}
printMatrix(mediaTemp);
console.log('averageTemp two-dimensional array:');

// igual a

// dia 1
mediaTemp[0] = [];
mediaTemp[0][0] = 72;
mediaTemp[0][1] = 75;
mediaTemp[0][2] = 79;
mediaTemp[0][3] = 79;
mediaTemp[0][4] = 81;
mediaTemp[0][5] = 81;

// dia 2
mediaTemp[1] = [];
mediaTemp[1][0] = 81;
mediaTemp[1][1] = 79;
mediaTemp[1][2] = 75;
mediaTemp[1][3] = 75;
mediaTemp[1][4] = 73;
mediaTemp[1][5] = 73;

// printMatrix(mediaTempTemp);
console.table(mediaTemp);

//Multidimensional Matrix

// Matrix 3x3x3 - Cubo

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
