/*
O que é JSON?
JSON significa notação de objeto JavaScript
JSON é um formato leve de troca de dados
JSON é texto simples escrito em notação de objeto JavaScript
JSON é usado para enviar dados entre computadores
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


