/*
O que é JSON?
JSON significa notação de objeto JavaScript
JSON é um formato de texto para armazenar e transportar dados
JSON é texto simples escrito em notação de objeto JavaScript
JSON é independente de linguagem de progração
*/

//JavaScript possui uma função integrada para converter strings JSON em objetos JavaScript:
//JSON.parse()

//JavaScript também possui uma função integrada para converter um objeto em uma string JSON:
//JSON.stringify()


let json = '{"nome":"Ederson Schmeing", "idade":39, "tipo_sanguineo":null}';
console.log("\nJSON: ", json);
objeto = JSON.parse(json);
console.log("Objeto: ", objeto);

obj = {
         nome: "Isabela do Anjos", 
         idade : 38, 
         tipo_sanguino : null
      };

console.log("\nObjeto: ", obj);
let json02 = JSON.stringify(obj)
console.log("JSON: ", json02);


json_array = 
`[{"nome":"Ederson Schmeing", "idade":39, "tipo_sanguineo":null},
   {"nome":"Isabela do Anjos", "idade":38, "tipo_sanguineo":"O+"},
   {"nome":"João Henrique Schmeing", "idade":18, "tipo_sanguineo":"O-"}, 
   {"nome":"Matheus Vicente Schmeing", "idade":12, "tipo_sanguineo":"B"}]`;

console.log("\nJSON array: ", json_array);
array_objeto = JSON.parse(json_array);
console.log("\narray objeto: ", array_objeto);
         
console.log("\n");
console.log(array_objeto[0]);
console.log(array_objeto[1]);
console.log(array_objeto[2]);
console.log(array_objeto[3]);
