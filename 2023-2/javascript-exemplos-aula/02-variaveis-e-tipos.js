/*
Loiane Groner - Estrutura de Dados e Algoritmos com JavaScript

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types

As variáveis armazenam dados que podem ser definidos, 
atualizados e recuperados sempre que necessário. 
Elas são um espaçao na memória do computador.

O nome das variáveis, chamados de identificadores, obedece 
determinadas regras. Um identificador JavaScript deve começar 
com uma letra, underline (_), ou cifrão ($); 
os caracteres subsequentes podem também ser números (0-9). 

Devido JavaScript ser case-sensitive, letras incluem caracteres 
de "A" a "Z" (maiúsculos)  e caracteres de "a" a "z" (minúsculos). 
Nomes válidos: Idade, tempo01, _nome e $valor 

Embora esses tipos de dados sejam uma quantidade relativamente pequena, 
eles permitem realizar funções úteis em suas aplicações. 

Objetos e funções são outros elementos fundamentais na linguagem.
Você pode pensar em objetos como recipientes para os valores, 
e funções como métodos que suas aplicações podem executar.


Temos três modos de declarar variáveis. 

var: Declara uma variável de escopo global, opcionalmente, inicializando-a com um valor.

const: Declara uma constante de escopo de bloco, apenas de leitura.

let: Declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor.

/* Váriaveis e Tipos de dados */ 

var numero = 1; // tipo Number 
numero = 3;

var preco = 1.5; // tipo Number decimal 
var idade = 39;  // tipo Number inteiro
let meu_nome = 'Ederson Schmeing'; // tipo String
let verdadeiro_valor = true; // tipo Boolean
let falso_valor = false; // tipo Boolean
var null_variavel = null;  
var undefined_valor;  // quando não faz a atribuição, o conteúdo fica undefined

const array_valor = [1, 3]; // vertor/matriz
const objeto_valor = {nome: "Ederson Schmeing"}; // objeto

console.log('numero: ' + numero);
console.log('preço: ' + preco);
console.log('meu_nome: ' + meu_nome);
console.log('verdadeiro_valor: ' + verdadeiro_valor);
console.log('falso_valor: ' + falso_valor);
console.log('null_variavel: ' + null_variavel);
console.log('undefined: ' + undefined);
console.log('vetor: ' + array_valor);
console.log('obejeto: ' + objeto_valor);


console.log(' \n');



/* Escopo de váriavel veremos mais para frente
var não respeita o escopo, o let e o const respeita escopo
*/
//blocos 

{
   console.log("blocos");
}

var minha_variavel = 'global';
minha_outra_variavel = 'global';


function minha_funcao() {
  var minha_variavel = 'local';
  return minha_variavel;
}

function minha_outra_funcao() {
  var minha_outra_variavel = 'local';
  return minha_outra_variavel;
}

console.log(minha_variavel); 
console.log(minha_funcao());
console.log(minha_variavel); 

console.log(minha_outra_variavel);
console.log(minha_outra_funcao());
console.log(minha_outra_variavel);
