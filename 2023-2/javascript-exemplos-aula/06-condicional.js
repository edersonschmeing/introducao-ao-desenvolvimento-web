
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
  console.log("dentro de um bloco "+ bloco);
  /*declaracao_2;
  .
  .
  .
  declaracao_n; */ 
}


/* Exemplo 01 - if */
var numero = 1;
if (numero === 1) {
  console.log('número é igual a 1');
}


/* Exemplo 02 - if-else */
var numero = 0;
if (numero === 1) {
  console.log('número é igual a 1');
} else {
  console.log('número não é igual a 1, o valor do número é ' + numero);
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


/*

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Control_flow_and_error_handling

Use a declaração throw para lançar uma exceção. Quando você lança uma exceção, você especifica a expressão contendo o valor a ser lançado:

throw expressão;

Você pode lançar qualquer expressão, não apenas expressões de um tipo específico. 

throw "Error2"; // tipo string
throw 42; // tipo numérico
throw true; // tipo booleano
throw {
  toString: function () {
    return "Eu sou um objeto!";
  },
};
*/

console.log("\ntry..catch");
try  { 
  console.log("gerar exceção no try");
  throw "gerar exceção";  
  console.log("não executa, gerou uma exceção");
} catch (e) {
   console.log(e + ", tratando exceção ");
}  


console.log("\ntry..finally");
try {
   console.log("executando o try");
} finally {
   console.log("sempre executa o finally");    
}

console.log("\ntry..catch..finally");
try  { 
   console.log("gerar exceção no try");
   throw new Error("gerar exceção");  
   console.log("não executa, gerou uma exceção");
} catch (e) {
   console.log(e + ", tratando exceção ");
} finally {
   console.log("sempre executa o finally");    
} 



//quando falarmos de funções valtaremos nesse assunto. 
console.log("\nCria um objeto do tipo UsuarioException"); 
// Cria um objeto do tipo UsuarioException
function UsuarioException(mensagem) {
  this.mensagem = mensagem;
  this.nome = "UsuarioException";
}

// Realiza a conversão da exceção para uma string adequada quando usada como uma string.
// (ex. pelo console de erro)
UsuarioException.prototype.toString = function () {
  return this.nome + ': "' + this.mensagem + '"';
};

// Cria uma instância de um tipo de objeto e lança ela
try { 
    throw new UsuarioException("Valor muito alto");
}catch (e) {
   console.log(e.mensagem);
}


