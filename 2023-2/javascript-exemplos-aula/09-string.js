/*
Uma string JavaScript contém zero ou mais caracteres escritos entre aspas.

https://www.w3schools.com/js/js_string_methods.asp

length
slice()
substring()
substr()
replace()
replaceAll()
toUpperCase()
toLowerCase()
concat()
trim()
trimStart()
trimEnd()
padStart()
padEnd()
charAt()
charCodeAt()
split()

*/

let uma_string = "Uma String";
console.log("\n" + uma_string);

let uma_string_aspas_duplas = "Uma String com aspas duplas";
console.log("\n" + uma_string_aspas_duplas); // operador + concatena string

let uma_string_aspas_simples = 'Uma String com aspas duplas';
console.log("\n" + uma_string_aspas_simples);

let uma_string_com_aspas_1 = "Uma String com ' simples ";
console.log("\n" + uma_string_com_aspas_1);

let uma_string_com_aspas_2 = 'Uma String com " simples';
console.log("\n" + uma_string_com_aspas_2);

let uma_string_com_aspas_3 = 'Uma "String" as duplas no meio';
console.log("\n" + uma_string_com_aspas_3);

let uma_string_com_aspas_4 = "Uma 'String' as simples no meio";
console.log("\n" + uma_string_com_aspas_4);

let alfabeto_string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = alfabeto_string.length;
console.log("\nlength - tamanho da string :" + length);

let parte_da_string = alfabeto_string.slice(4,8); //posição 4 até a 8, começa em 0
console.log("\nslice -parte da string EFGH :" + parte_da_string);

parte_da_string = alfabeto_string.slice(-3); //ultima posição volta para o começo
console.log("\nslice - parte da string XYZ :" + parte_da_string); 

parte_da_string = alfabeto_string.slice(-22, -18); //ultima posição volta faixa para começo 
console.log("\nslice - parte da string EFGH :" + parte_da_string); 

//similar ao slice e esta depreciado, diferença é que valores iniciais e finais menores que 0 são tratados como 0
parte_da_string = alfabeto_string.substring(4, 8);
console.log("\nsubstring - parte da string EFGH :" + parte_da_string); 

//similar ao slice e esta depreciado, segundo parâmetro é o tamanho
parte_da_string = alfabeto_string.substr(4, 4);
console.log("\nsubstr - parte da string EFGH :" + parte_da_string); 


let js = "java script";
let ecma = js.replace("java", "ecma");
console.log("\nreplace - "+js + " por "+ ecma); 


//Métodos de pesquisa em strings
/*
indexOf()
lastIndexOf()
search()
match()
matchAll()
includes()
startsWith()
endsWith()

*/



//template String

let text = `He's often called "Johnny"`;
console.log("\ntemplate - "+ text)

let primeiro_nome = "Ederson";
let segundo_nome = "Schmeing";
let nome_completo = `${primeiro_nome} ${segundo_nome}`;
console.log("\ntemplate - "+ nome_completo)

let preco = 10;
let juros = 0.25;
let total = `Total: ${(preco * (1 + juros)).toFixed(2)}`;
console.log("\ntemplate - "+ total)


