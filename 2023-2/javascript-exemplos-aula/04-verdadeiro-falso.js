/*

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Control_flow_and_error_handling

Valores avaliados como falsos

Os seguintes valores são avaliados como falsos:

- false
- undefined
- null
- 0
- NaN
- string vazia ("")

*/


function teste_verdadeiro(valor) {
  return valor ? console.log('verdadeiro') : console.log('false');
}

teste_verdadeiro(true); // true (verdadeiro)
teste_verdadeiro(false); // false (falso)
teste_verdadeiro(new Boolean(false)); // true (object is always true)

teste_verdadeiro(''); // false
teste_verdadeiro('a'); // true
teste_verdadeiro('Ederson Schmeing'); // true (verdadeiro)
teste_verdadeiro(new String(''));     // true (object é sempre true (verdadeiro))

teste_verdadeiro(1);   // true (verdadeiro)
teste_verdadeiro(-1);  // true (verdadeiro)
teste_verdadeiro(NaN); // false (falso)
teste_verdadeiro(new Number(NaN)); // true (object é sempre true (verdadeiro))

teste_verdadeiro({}); // true (object is always true)

var objeto = { nome: 'Ederson Schmeing' };
teste_verdadeiro(objeto); // true (verdadeiro)
teste_verdadeiro(objeto.nome); // true (verdadeiro)
teste_verdadeiro(objeto.idade); // false (falso) (propriedade não definida)
