/*
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types

JavaScript Debugger (Nightly) extension para debug.

*/ 


// comentário de uma linha 

/* isto é um comentário longo
   de múltiplas
    linhas.
 */

// /* Você não pode, porém, /* aninhar comentários */ SyntaxError */


// Sintaxe strict mode para todo o script
"use strict";

function saida(t) {
  document.write('<p>' + t + '</p>');
}

//alert('Hello, World!');
console.log('Hello, World!');
//saida('Hello, World!');