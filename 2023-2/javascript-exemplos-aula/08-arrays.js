/*
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Indexed_collections
Um array é um conjunto de valores ordenados que você o 
referencia com um nome e um índice.  


https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Arrays
Arrays são geralmente descritas como "lista de objetos";
elas são basicamente objetos que contem múltiplos valores armazenados em uma lista. 
Um objeto array pode ser armazenado em variáveis e ser tratado de forma muito similar 
a qualquer outro tipo de valor, a diferença está em podermos acessar cada valor dentro 
da lista individualmente, e fazer super úteis e eficientes coisas com a lista,
como laço através da lista e fazer a mesma coisa para cada valor. 
Talvez nós pegamos uma série de produtos e seus preços armazenados em uma array,
e nós queremos fazer um laço através de todos eles e mostrar em um recibo,
enquanto somamos todos os preços e mostramos o preço total ao final. */


//criação de arrays

// criar dessa forma de preferência
 dias_da_semana = [];
//dias_da_semana.length = 7 //pode definir o tamanho

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

//iteração em array com for
console.log("\niteração em array com for")
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

//iteração em array com método forEach
console.log("\niteração em array com método forEach")
numeros.forEach(function (numero) {
  console.log(numero);
});

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
  //console.log(" ", i,  "   ",    numeros[i - 1]) 
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
console.log('Removendo 3 elementos (1, 2, 3) começando no index 5', numeros);

numeros.splice(5, 0, 20, 25, 30);
console.log('Adicionando 3 elementos (20, 25, 30) começando no index 5', numeros);

numeros.splice(5, 3, 2, 3, 4);
console.log('Removendo 3 elementos começando do index 5 e adicionando (2, 3, 4)', numeros);

//Como unir dois ou mais arrays
console.log("\nconcatena dois arrays")
const numeros5 = [30, 25]
const numeros6 = numeros5.concat(numeros) 
console.log(numeros5)
console.log(numeros)
console.log('numeros5.concat(numeros)', numeros6)

console.log("\nconcatena dois arrays usando spread (...)")
let numeros7 = [...numeros5, ...numeros]
console.log('numeros7 = [...numeros5, ...numeros]', numeros7)

// inicia no índice 1 e extrai todos os elementos
var meu_array = new Array("a", "b", "c", "d", "e");
meu_array = meu_array.slice(1, 4); 
// até o índice 3, retornado [ "b", "c", "d"]
console.log(meu_array)



//ORDENAÇÃO

//reset numeros
numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 20];
console.log('numeros', numeros);

numeros = numeros.reverse();
console.log('numeros.reverse()', numeros);

numeros = numeros.sort();
console.log('numeros.sort()', numeros);

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

//PROCURANDO

let condicao = numeros.find((elemento) => elemento > 10) //retorna o primeiro elemento que atende a condição
console.log("condicao", condicao)

let indice = numeros.findIndex((elemento) => elemento === 20) //retorna o indice do elemento procurado
console.log("indice", indice)


//reset array
numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log('\nnumeros', numeros);

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
const numeros_separados = numerosString.split('-').map(el => {
  let n = Number(el);
  return n === 0 ? n : n || el;
}); 
console.log('numeros.split( "-" )', numeros_separados); 
