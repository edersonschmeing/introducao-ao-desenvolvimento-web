/*
O que é JSON?
JSON significa notação de objeto JavaScript
JSON é um formato de texto para armazenar e transportar dados
JSON é texto simples escrito em notação de objeto JavaScript
JSON é independente de linguagem de progração

https://www.json.org/json-pt.html
https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/JSON

//JavaScript possui uma função integrada para converter strings JSON em objetos JavaScript:
//JSON.parse()

//JavaScript também possui uma função integrada para converter um objeto em uma string JSON:
//JSON.stringify()

Tipo de Dados Validos

string
number
object (JSON object)
array
boolean
null

*/

let json = '{"nome":"Pessoa 01", "idade":39, "tipo_sanguineo":null, "altura": 1.83}';
console.log("\nJSON: ", json);
objeto = JSON.parse(json); //converte JSON em Objeto JavaScript
console.log("Objeto: ", objeto);

obj = {
         nome: "Pessoa 02", 
         idade : 38, 
         tipo_sanguino : null,
         altura : 1.64
      };

console.log("\nObjeto: ", obj);
let json02 = JSON.stringify(obj) //converte Objeto JavaScript em JSON
console.log("JSON: ", json02);


json_array = 
`[{"nome":"Pessoa 01", "idade":39, "tipo_sanguineo":null, "altura": 1.83},
   {"nome":"Pessoa 02", "idade":38, "tipo_sanguineo":"O+", "altura": 1.64},
   {"nome":"Pessoa 03", "idade":18, "tipo_sanguineo":"O-", "altura": 1.75}, 
   {"nome":"Pessoa 04", "idade":12, "tipo_sanguineo":"B", "altura": 1.61}]`;

console.log("\nJSON array: ", json_array);
array_objeto = JSON.parse(json_array); //converte JSON em Objeto Java Script
console.log("\narray objeto: ", array_objeto);
         
console.log("\n");
console.log(array_objeto[0]);
console.log(array_objeto[1]);
console.log(array_objeto[2]);
console.log(array_objeto[3]);




