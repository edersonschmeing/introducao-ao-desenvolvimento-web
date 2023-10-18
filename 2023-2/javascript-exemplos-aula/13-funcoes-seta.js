/*A sintaxe da função de seta JavaScript permite escrever 
uma função JavaScript com uma sintaxe mais curta e concisa.*/

function saudacoes(nome) {
    console.log(`Olá, ${nome}!`);
}  
saudacoes("Ederson"); // Olá, Ederson!
//igual a
//arrow function
const saudacoes_seta = (nome) => {
   console.log(`Olá, ${nome} com arrow function!`);
}; 
saudacoes_seta("John"); // Hello, John!


/* sintaxe arrow function 
const fun = (param1, param2, ...) => {
   //corpo da função
}
*/  

function soma2(numero) {
   return num + 2;
}
//igual a
//arrow function de uma linha
const soma2_seta = (num) => num + 2;
console.log(soma2_seta(3))

//arrow function de uma linha
const saudacoes_seta2 = () => console.log("Hello World!");
saudacoes_seta2()

//arrow function com mais linhas
const saudacoes_seta3 = () => {
   console.log("Olá!");
   console.log("Como vai você?");
};
saudacoes_seta3()


function soma3(numero) {
  return num + 3;
}
//igual a
// //arrow function sem (), {} e return
const soma3_seta = num => num + 3;
console.log(soma3_seta(6))

//precisa dos ()
//Quando a função não tem parâmetro
//Quando a função tem mais de um parâmetro
const saudacoes_seta4 = () => console.log("Hello World!");

const saudacoes_seta5 = (nome, idade) => console.log(`O ${nome} tem ${idade} anos`);

//A função de seta não possui ligação de argumentos
//pode acessar os argumentos que passa para a função 
//usando a palavra-chave argumentos:
const imprime_parametros = function () {
    console.log(arguments);
};
imprime_parametros(1, 2, 3);
// [Arguments] { '0': 1, '1': 2, '2': 3 }
  
const imprime_parametros_seta = () => console.log(arguments);

imprime_parametros_seta(1, 2, 3);
//Uncaught ReferenceError: arguments is not defined

//pode usar a sintaxe de propagação(spread) para imitar a
//ligação dos argumentos da seguinte maneira:
const imprime_parametros_seta_spread = (...arguments) => 
   console.log(arguments);

imprime_parametros_seta_spread(1, 2, 3);
// [1, 2, 3]


//Como converter facilmente uma função normal em uma função de seta
/*
function soma4(num) {
   return num + 4;
}
  
// etapa 1: troque function por let / const
const soma4(num) {
    return num + 4;
}
  
// etapa 2: adicione = depois do nome da function
const soma4 = (num) {
    return num + 4;
}
  
// etapa 3: adicione => depois dos () parênteses
const soma4 = (num) => {
    return num + 4;
}
  
Quando você tem uma função de linha única,
há a etapa 4 opcional para remover as chaves 
e a palavra-chave return da seguinte maneira:

// de 
const soma4 = num => {
  return num + 4;
};

// para
const soma4 = num => num + 4;

*/

//function
function circleArea(r) {
    var PI = 3.14;
    var area = PI * r * r;
    return area;
 };
 console.log(circleAreaES5(2));

//(ES5): arrow functions
var circleAreaES5 = function circleArea(r) {
   var PI = 3.14;
   var area = PI * r * r;
   return area;
};
console.log(circleAreaES5(2));

//(ES6)
const circleArea = r => { 
    const PI = 3.14;
    const area = PI * r * r;
    return area;
};
console.log(circleArea(2));

//(ES6) função seta de uma linha
const circleArea2 = r => 3.14 * r * r;
console.log(circleArea2(2));