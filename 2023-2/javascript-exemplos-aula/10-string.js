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
repeat()

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

console.log(" repita 3 vezes ".repeat(3))


/*
Métodos de pesquisa em strings
https://www.w3schools.com/js/js_string_search.asp

indexOf()
lastIndexOf()
search()
match()
matchAll()
includes() 
startsWith()
endsWith()

*/

let texto = "Por favor, localize onde ocorre 'localize'!";
let index = texto.indexOf("localize");
console.log("\nlocale - index primeira letra da primeira ocorrência", index); 

index = texto.lastIndexOf("localize");
console.log("\nlocale - index primeira letra da última ocorrência", index); 

index = texto.indexOf("localize", 15); //a partir do segundo parâmetro
console.log("\nlocale - index primeira letra da primeira ocorrência começando no 15", index); 

index = texto.lastIndexOf("localize", 15); //volta para o começo a partir do segundo parâmetro
console.log("\nlocale - index primeira letra da última ocorrência", index); 

//aceita expressão regular e não tem um segundo parâmetro
index = texto.search("localize");
console.log("\nsearch - index primeira letra da primeira ocorrência", index); 
index = texto.search(/localize/); //regexp
console.log("\nsearch regexp - index primeira letra da primeira ocorrência", index); 

let resultado = texto.match("lize"); 
console.log("\nmatch array - ",  resultado.length)

//https://www.w3schools.com/js/js_regexp.asp
resultado_regexp = texto.match(/loca/g); 
console.log("\nmatch array - ", resultado_regexp.length, resultado)

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


