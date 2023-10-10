/*
Um array é um conjunto de valores ordenados que você o referencia com um nome e 
um índice. Por exemplo, você pode ter um array chamado empregrados que contém 
nomes de funcionários indexados por seus números de funcionários. 
Então empregados[1] poderia ser o funcionário número 1, empregados[2]
o funcionário número 2 e assim por diante. 

JavaScript não possui um tipo de dados array específico. No entanto, 
você pode usar o objeto predefinido Array e seus métodos para trabalhar 
com arrays em suas aplicações. O objeto Array tem métodos para manipular 
arrays de várias maneiras como join, reverse e sort. 
Ele tem uma propriedade para determinar o tamanho do array e outras 
propriedades para usar com expressões regulares.


//declarando um array

var arr1 = new Array(elemento0, elemento1, ..., elementoN);
var arr2 = Array(elemento0, elemento1, ..., elementoN);
var arr3 = [elemento0, elemento1, ..., elementoN];
v


*/

const array01 = []
const array02 = Array()
const array03 = new Array()
//var arr = new Array(12); // 12 é o tamanho do array
//var arr = Array(15); // 15 é o tamanho do array
//var arr = [];
//arr.length = comprimentoDoArray;


console.log("\ntypeof da variável")
console.log('typeof array01:', typeof array01); // array
console.log('typeof array02:', typeof array02); // array
console.log('typeof array03:', typeof array03); // array

//declarando e prechendo um arry
const array04 = [1, 2, 3]
const array05 = Array.of(1, 2, 3)

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
array06 = Array(12).fill(0)
console.log(array06)

//tamanho do array
console.log("\ntamanho do array")
console.log(array06.length) //12
