/*Uma função é simplesmente uma seção (ou bloco) de código 
escrita para executar uma tarefa específica.*/

// função
function cumprimento01() {
  console.log('\nOlá!');
}
cumprimento01();

// função com parâmetro/argumento 
function cumprimento02(nome) {
  console.log("\nOlá " +  nome);
  console.log(`Olá, ${nome}!`);
}
cumprimento02('Ederson');
cumprimento02('Ederson!', 'Outro texto'); //ignora segundo parâmetro
cumprimento02(); //undefined


// função com mais parâmetros/argumentos 
function cumprimento03(nome, tempo) {
  console.log(`\nOlá, ${nome}!`);
  console.log(`Tempo esta, ${tempo}!`);
}
cumprimento03("Ederson", "chuvoso")


//funções com parâmetros default
function cumprimento04(nome = "Ederson") {
  console.log(`\nOlá, ${nome}!`);
}
cumprimento04()
cumprimento04("Isabela")

function cumprimento05(tempo, nome = "Ederson",) {
  console.log(`\nOlá, ${nome}!`);
  console.log(`Tempo esta, ${tempo}!`);
}
cumprimento05("chuvoso")

function cumprimento06(name = "Ederson", tempo) {
  console.log(`Hello, ${name}!`);
  console.log(`O tempo esta ${tempo} todos os dias.`);
}
cumprimento06(undefined, "ensolarado");
cumprimento06(null, "ensolarado");



/* função usando declaração de retorno return */
function soma(numero1, numero2) {
  let valor = numero1 + numero2; 
  return valor; 
}
let resultado = soma(1, 2);
console.log(resultado);


//função com dois retorno return
function verifique_idade(idade) {
  let pode_tirar_cnh;
  if (idade >= 18) {
    pode_tirar_cnh = "Pode tirar a CNH"; 
    return pode_tirar_cnh;
  } 
  return "Não pode tirar a CNH";
}

let pode_tirar_cnh = verifique_idade(20); 
console.log(pode_tirar_cnh);
console.log(verifique_idade(15));


//interrompendo a função com return
function cumprimento07() {
  console.log("Olá!");
  return;
  console.log("Adeus!");
}
cumprimento07()

console.log("\n")

//escopo de váriavel 
function cumprimento08() {
  let meu_cumprimento = "Bom dia!";
}
cumprimento08();
//console.log(meu_cumprimento);


let meu_cumprimento = "Bom dia!";
function cumprimento09() {
  console.log(meu_cumprimento);
}
cumprimento09(); // Bom dia!

let meu_cumprimento02 = "Bom dia!";

function cumprimento10() {
  let meu_cumprimento02 = "Boa tarde!";
  console.log(meu_cumprimento02);
}
cumprimento10();  // Boa tarde!
console.log(meu_cumprimento02); // Bom dia!!

//parâmetro rest
function imprime_parametros(...transforma_array){
  console.log(transforma_array)
}

imprime_parametros("A", "B", "C"); 
// [ 'A', 'B', 'C' ]
imprime_parametros(1, 2, 3, 4, 5);
// [ 1, 2, 3, 4, 5 ]