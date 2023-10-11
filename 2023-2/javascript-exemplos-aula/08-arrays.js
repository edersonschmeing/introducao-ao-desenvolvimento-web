/*
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Indexed_collections

declarando um array

const arr1 = new Array(elemento0, elemento1, ..., elementoN);
const arr2 = Array(elemento0, elemento1, ..., elementoN);
const arr3 = [elemento0, elemento1, ..., elementoN];

*/

const array01 = []
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
const array07 = [1, 2, 3, 4]
console.log("\ntamanho do array")
console.log(array07.length) //4
console.log("novo tamanho do array")
array07.length = 3
console.log(array07.length) //3

//adicionar um item a um array
console.log("\nadicionar um item a um array")
array07.push(4)
console.log(array07)

//adicionar um item a um array
console.log("\nadicionar um item no começo de um array")
array07.unshift(0)
console.log(array07)
console.log("\nadicionar dois itens no começo de um array")
array07.unshift(-2, -1)
console.log(array07)


//remover um item a um array
console.log("\nremover um item a um array")
array07.pop(array07)
console.log(array07)
console.log("\nremover um item no começo de um array")
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
const array11 = [...array10, ...array09]
console.log(array11)

