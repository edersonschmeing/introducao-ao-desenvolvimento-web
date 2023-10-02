
/*
Loiane Groner - Estrutura de Dados e Algoritmos com JavaScript

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Control_flow_and_error_handling

O JavaScript suporta um conjunto compacto de declarações, especificamente de fluxo de controle, 
que você pode utilizar para atribuir uma grande interatividade a páginas web.

Uma declaração em bloco é utilizada para agrupar declarações. O bloco é delimitado por um par de chaves: {}. 

{
   declaracao_1;
   declaracao_2;
   .
   .
   .
   declaracao_n;
}

Uma declaração condicional é um conjunto de comandos que são executados caso uma condição especificada seja verdadeira. 
O Javascript suporta duas declarações condicionais: if...else e switch

if (condicao) {
  declaracao_1;
} else {
  declaracao_2;
}

if (condicao_1) {
  declaracao_1;
} else if (condicao_2) {
  declaracao_2;
} else {
  declaracao_2;
}


switch (expressao) {
   case rotulo_1:
      declaracoes_1
      [break;]
   case rotulo_2:
      declaracoes_2
      [break;]
   ...
   default:
      declaracoes_padrao
      [break;]
}


*/

// declaração de bloco
{
  var bloco = "bloco";
  console.log("dentro de um bloco");
  /*declaracao_2;
  .
  .
  .
  declaracao_n; */ 
}


/* Exemplo 01 - if */
var numero = 1;
if (num === 1) {
  console.log('número é igual a 1');
}


/* Exemplo 02 - if-else */
var numero = 0;
if (numero === 1) {
  console.log('número é igual a 1');
} else {
  console.log('número não é igual a 1, o valor do número é ' + num);
}


/* Exemplo 03 - if-else-if-else... */
var mes = 5;
if (mes === 1) {
   console.log('Janeiro');
} else if (mes === 2) {
   console.log('Fevereiro');
} else if (mes === 3) {
   console.log('Março');
} else {
   console.log('Mês não é Janeiro, Fevereieo or Março');
}


/* Exemplo 04 - switch */
var mes = 5;
switch (mes) {
  case 1:
    console.log('Janeiro');
    break;
  case 2:
    console.log('Fevereiro');
    break;
  case 3:
    console.log('Março');
    break;
  default:
    console.log('Mês não é Janeiro, Fevereieo or Março');
}

/* Exemplo 05 - operador ternário - if..else */
if (numero === 1) {
  nummero--;
} else {
  numero++;
}

// é o mesmo que 
numero === 1 ? numero-- : numero++;

