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
