/*

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators

*/

//* ****************************** ==
console.log('Ederson Schmeing' ? true : false);
// outputs true (saída verdadeira)

console.log('Ederson Schmeing' == true);
// 1 - converte para Boolean usando função toNumber
// 'Ederson Schmeing' == 1
// 2 - converte para String usando função toNumber
// NaN == 1
// outputs false (saída falso)

console.log('Ederson Schmeing' == false);
// 1 - converte para Boolean usando função toNumber
// 'Ederson Schmeing' == 0
// 2 - converte para String usando função toNumber
// NaN == 0
// outputs false (saída falso)


console.log([0] == true);
// 1 - converte para Boolean usando função toNumber
// [0] == 1
// 2 - converte para Object usando toPrimitive
// 2.1 - [0].valueOf() não é primitivo
// 2.2 - [0].toString é 0
// 0 == 1
// outputs false (saída falso))

//* ****************************** ===
console.log('Ederson Schmeing' === true); // false (falso)

console.log('Ederson Schmeing' === 'Ederson Schmeing'); // true (verdadeido)

var pessoa1 = { nome: 'Ederson Schmeing' };
var pessoa2 = { nome: 'Ederson Schmeing' };
console.log(pessoa1 === pessoa2); // false, objetos diferentes.
