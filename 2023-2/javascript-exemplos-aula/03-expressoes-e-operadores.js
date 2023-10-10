/*
Loiane Groner - Estrutura de Dados e Algoritmos com JavaScript

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators

O JavaScript possui os tipos de operadores a seguir:
    
- Operadores de atribuição
- Operadores de comparação
- Operadores aritméticos
- Operadores pré e pós de incremento e decremento pré e pós
- Operadores lógicos
- Operadores relacionais   
- Operadore de string
- Operador condicional (ternário ?)
- Operadores unário - delete
- Operador typeof

- Operadores atribuição bit a bit
- Operadores de comparação bit a bit
- Operador vírgula  
*/

/* Operadores de atribuição*/
console.log('\nOperadores de atribuição');
var numero = 2;
numero -= 1;
console.log('O valor do número é: ' + numero);

numero += 1; // igual numero = numero + 1;   // adição 
numero -= 2; // igual numero = numero - 2;   // subtração
numero *= 3; // igual numero = numero * 3;   // multiplicação
numero /= 2; // igual numero = numero / 2;   // divisão
numero %= 3; // igual numero = numero % 3;   // resto da divisão. 
numero **= 2; // numero = numero ** 2; // exponencial. 
console.log('O novo valor do número é: ' + numero);

numero = 2;
/* Operadores de comparação */
console.log('\nOperadores de comparação');
console.log('numero == 1 : '  + (numero == 1));  // verdadeiro caso os operandos sejam iguais.
console.log('numero === 1 : ' + (numero === 1)); // Retorna verdadeiro caso os operandos sejam iguais e do mesmo tipo.
console.log('numero != 1 : '  + (numero != 1));  // verdadeiro caso os operandos não sejam iguais.
console.log('numero !== 1 : '  + (numero !== 1)); //verdadeiro caso os operandos não sejam iguais e/ou não sejam do mesmo tipo.
console.log('numero > 1 : '   + (numero > 1));   //verdadeiro caso o operando da esquerda seja maior que o da direita.
console.log('numero < 1 : '   + (numero < 1));   // Retorna verdadeiro caso o operando da esquerda seja menor que o da direita.
console.log('numero >= 1 : '  + (numero >= 1));  //Retorna verdadeiro caso o operando da esquerda seja maior ou igual ao da direita.
console.log('numero <= 1 : '  + (numero <= 1));  //Retorna verdadeiro caso o operando da esquerda seja menor ou igual ao da direita.


/* Operadores aritiméticos */
console.log('\nOperadores aritiméticos');
numero = 0; 
console.log('valor do numero é ' + numero);

numero = numero + 2; // adição
console.log('o valor do número é ' + numero);

numero = numero * 3; // multiplicação
console.log('o valor do número é ' + numero);

numero = numero / 2; // divisão
console.log('o valor do número é ' + numero);

numero = numero % 2; // resto da divisão. 
console.log('o valor do número é ' + numero);

numero = numero ** 2; // exponencial
console.log('o valor do número é ' + numero);


//Operadores pré e pós de incremento e decremento pré e pós
console.log('\nOperadores pré e pós de incremento e decremento');
var numero = 10;
//var multi_por_3 = 3 * ++numero; //pós usa a variável depois incrementa
numero++;
numero--;
console.log('o valor do número é ' + numero);

++numero; // pré incrementa depois usa a variável
--numero;
console.log('o valor do número é ' + numero);


//Operadores lógicos
console.log('\n- Operadores lógicos');
console.log('true && false : ' + (true && false)); // && operador ( e ) 
console.log('true || false : ' + (true || false)); // || operador ( ou )
console.log('!true : ' + !true);                   // ! operador de negação


//Operadores de string (concatenação +)
console.log("\n- Operadores string (concatenação +)");
console.log("minha " + "string"); // exibe a string "minha string".


//Operador condicional (ternário ?)
console.log('\n- Operadores (ternário)');
var idade = 17;
var situacao = idade >= 18 ? "adulto" : "menor de idade";
console.log(situacao);


/* O operador typeof é utilizado em qualquer uma das seguintes formas:*/
console.log('typeof numero:', typeof numero);
console.log('typeof String:', typeof 'String');
console.log('typeof true:', typeof true);
console.log('typeof [1,2,3]:', typeof [1, 2, 3]); // array
console.log('typeof {nome:Ederson Schmeing}:', typeof { nome: 'Ederson Schmeing' }); //object

/* 
O operador delete apaga um objeto, uma propriedade de um objeto ou 
um elemento no índice especificado de uma matriz. A sintaxe é:
/* - Operadores unário delete  */
console.log('\nOperador unário - delete');
var meu_objeto = { nome: 'Ederson Schmeing', idade: 39 };
delete meu_objeto.idade;
console.log(meu_objeto); // Object {nome: "Ederson Schmeing"}

//====

//Operadores de atribuição bit a bit
console.log('\nOperadores de atribuição bit a bit - conhecimento');
console.log('numero <<= 1:', numero <<= 1);  //  Atribuição bit-a-bit por deslocamento á esquerda
console.log('numero >>= 1:', numero >>= 1);  // Atribuição bit-a-bit por deslocamento á direita
console.log('numero >>>= 1:', numero >>= 1); // Atribuiçãode bit-a-bit deslocamento á direita não assinado
console.log('numero &= 1:', numero &= 1);    // Atribuição AND bit-a-bit
console.log('numero ^= 1:', numero ^= 1);    // Atribuição XOR bit-a-bit
console.log('numero |= 1:', numero |= 1);  // Atribuição XOR bit-a-bit


/* Operadores de comparação bit a bit */
console.log('\nOperadores bit a bit - conhecimento');
console.log('5 & 1:', 5 & 1);   // igual a 0101 & 0001 (resultado 0001 / 1) // AND bit-a-bit
console.log('5 | 1:', 5 | 1);   // igual a 0101 | 0001 (resultado 0101 / 5) // OR bit-a-bit
console.log('~ 5:', ~5);        // igual a ~0101 (esultado 1010 / 10) // Negação
console.log('5 ^ 1:', 5 ^ 1);   // igual a 0101 ^ 0001 (esultado 0100 / 4) // XOR bit-a-bit
console.log('5 << 1:', 5 << 1); // igual a 0101 << 1 (esultado 1010 / 10)  // bit-a-bit por deslocamento á esquerda
console.log('5 >> 1:', 5 >> 1); // igual a 0101 >> 1 (esultado 0010 / 2)   // bit-a-bit por deslocamento á direita
console.log('5 >>> 1:', 5 >> 1); // Deslocamento à direita com preenchimento zero

/* O operador vírgula (,) simplesmente avalia ambos de seus operandos e retorna o 
valor do segundo.  Este operador é utilizado primariamente dentro de um laço 
for para permitir que multiplas variáveis 
sejam atualizadas cada vez através do laço.
Por exemplo, se a é uma matriz bidimensional com 5 elementos 
em um lado, o código a seguir utiliza o 
operador vírgula para incrementar duas variáveis de uma só vez. 
O código imprime os valores dos 
elementos diagonais da matriz:

console.log('\nOperador vírgula');
for (var i = 0, j = 9; i <= 9; i++, j--)
  console.log("a[" + i + "][" + j + "]= " + a[i][j]);
*/