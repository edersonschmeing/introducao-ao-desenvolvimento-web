/*
Uma string JavaScript contém zero ou mais caracteres escritos entre aspas.
*/

let uma_string = "Uma String";
console.log("\n" + uma_string);

let uma_string_aspas_duplas = "Uma String com aspas duplas";
console.log("\n" + uma_string_aspas_duplas);

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





//template string
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




const book = {
  name: 'Learning JavaScript DataStructures and Algorithms'
};

console.log('You are reading ' + book.name + '.,\n	and this is a new line\n	and so is this.');

console.log(`You are reading ${book.name}.,
   and this is a new line
    and so is this.`);


