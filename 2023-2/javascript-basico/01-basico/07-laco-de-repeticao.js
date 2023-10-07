/*
Loiane Groner - Estrutura de Dados e Algoritmos com JavaScript

Laços oferecem um jeito fácil e rápido de executar uma ação repetidas vezes.

Existem várias formas diferentes de laços, mas eles essencialmente fazem a mesma coisa: 
repetir uma ação múltiplas vezes ( inclusive você poderá repetir 0 vezes). Os vários mecanismos
diferentes de laços oferecem diferentes formas de determinar quando este irá começar ou terminar. 
Há várias situações em que é mais fácil resolver um problema utilizando um determinado tipo de laço do que outros.

Os possíveis laços de repetição em JavaScript:

- declaração for
- declaração do...while
- declaração while
- declaração label
- declaração break
- declaração continue
- declaração for...in
- declaração for...of

*/


console.log('\n**** exemplo for  ****');
/* for - exemplo */
for (var i = 0; i < 10; i++) {
  console.log(i);
}

console.log('\n**** exemplo while  ****');
/* while - exemplo */
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

console.log('\n**** exemplo do-while  ****');
/* do-while - exemplo */
var i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);

console.log('\n**** exemplo break  ****');
/* break - exemplo */
for (var i = 0; i < 10; i++) {
  console.log(i);
  if (i > 5) 
    break
}


console.log('\n**** exemplo continue  ****');
/* continue - exemplo */
var i = 0;
while (i < 10) {
  i++;
  if (i > 5)
    continue;
  console.log(i);
}

/*
/*for in e of - exemplo 
O exemplo a seguir mostra a diferença entre o for...of e o for...in. Enquanto o for...in 
interage com o nome das propriedades, o for...of interage com o valor das propriedades.
*/

var vetor = [3, 5, 7];
vetor.foo = "hello";

console.log('\n**** exemplo for..in  ****');
for (var i in vetor) {
  console.log(i); // logs "0", "1", "2", "foo"
}

console.log('\n**** exemplo for..of  ****');
for (var i of vetor) {
  console.log(i); // logs "3", "5", "7"
}
