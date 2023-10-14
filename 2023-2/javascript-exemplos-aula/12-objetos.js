// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_objects

//usando variáveis
let titulo_livro = "Lógica de Programação com JavaScript";
let autor_livro = "Edécio Fernando Iepsen";


//usando arrays
let livro_array = ["Lógica de Programação com JavaScript", "Edécio Fernando Iepsen"];

//usando objetos com propriedade se funções
//Um objeto é declarado usando chaves {}, e cada item entre chaves é escrito no formato chave:valor.

/*
let livro_objeto = {}

let livro_objeto = {
  titulo: "Lógica de Programação com JavaScript",
  autor: "Edécio Fernando Iepsen",
  descricao: function () {
    console.log(`Título do livro: ${this.titulo}`);
    console.log(`Autoro do livro: ${this.autor}`);
  },
  publicacao: {
                ano: 2023,
                editora: "Novatec"
              } 
}; 
*/

//Usando uma função construtora
function Livro_Objeto(titulo, autor) {
  this.titulo = titulo; 
  this.autor = autor;
  this.descricao = function () {
    console.log(`Título do livro: ${this.titulo}`);
    console.log(`Autoro do livro: ${this.autor}`);
  };
};
let livro_objeto = new Livro_Objeto("Lógica de Programação com JavaScript", "Edécio Fernando Iepsen" )

console.log("Objeto");
console.log(livro_objeto)

console.log("\nExecuta funcao descricao ");
livro_objeto.descricao();


//notação .
console.log("\nnotação . ");
console.log(livro_objeto.titulo);
console.log(livro_objeto.autor);

//notação []
console.log("\nnotação [] ");
console.log(livro_objeto["titulo"]);
console.log(livro_objeto["autor"]);

//adicionar propriedade ano
console.log("\nadicionar propriedade ano");
livro_objeto.ano = 2023;
console.log(livro_objeto);

//adicionar propriedade editora
console.log("\nadicionar propriedade editora");
livro_objeto["editora"] = "Novatec";
console.log(livro_objeto);

//cria função imprime_publicacao e executa
console.log("\ncria função imprime_publicacao e executa");
Livro_Objeto.prototype.imprime_publicacao = function() {
  console.log(this.ano);
  console.log(this.editora); 
};
livro_objeto.imprime_publicacao();


//altera propriedade autor
console.log("\naltera propriedade autor");
livro_objeto.autor = "Iepsen, Edécio Fernando";
console.log(livro_objeto);

//remove propriedade editora
console.log("\nremove propriedade editora");
delete livro_objeto.editora;
console.log(livro_objeto);

//verifica se propriedade existe no objeto
console.log("\nverifica se propriedade existe no objeto");
console.log('editora' in livro_objeto); // false
console.log('ano' in livro_objeto); // true

console.log("\narray de objetos")
let livro_objeto01 = new Livro_Objeto("Programação Web com Node e Express", "Ethan Brown)")
livro_objeto01.ano = 2020;
let livro_objeto02 = new Livro_Objeto("Desconstruindo a Web", "Willian Molinari)")
livro_objeto02.ano = 2015;

livros = [livro_objeto]
livros.push(livro_objeto01) 
livros.push(livro_objeto02) 

console.log(livros)
for (const livro of livros) { 
   console.log(`Título: ${livro.titulo} - ${livro.ano}`)  
} 


console.log("\n")



// exemplos 

/* Object exemplo 1 */
//var obj = new Object();

/* Object example 2 */
var obj = {};

obj = {
  name: {
    first: 'Gandalf',
    last: 'the Grey'
  },
  address: 'Middle Earth'
};

/* Object example 3 */
function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
  this.printIsbn = function() {
    console.log(this.isbn);
  };
}

var book = new Book('title', 'pag', 'isbn');

console.log(book.title); // outputs the book title

book.title = 'new title'; // update the value of the book title

console.log(book.title); // outputs the updated value

Book.prototype.printTitle = function() {
  console.log(this.title);
};

book.printTitle();

book.printIsbn();

//propriedades de objetos

//* ****** EcmaScript 2015 (ES6): Destructuring Assignment + Property Shorthand
let [x, y] = ['a', 'b'];
let obj1 = { x, y };
console.log(obj1); // { x: "a", y: "b" }

// swap
[x, y] = [y, x];
var temp = x;
x = y;
y = temp;

// code above is the same as
var x2 = 'a';
var y2 = 'b';
var obj2 = { x2: x2, y2: y2 };
console.log(obj2); // { x: "a", y: "b" }

// Method Properties
const hello = {
  name: 'abcdef',
  printHello() {
    console.log('Hello');
  }
};
console.log(hello.printHello());

// code above is the same as:
var hello2 = {
  name: 'abcdef',
  printHello: function printHello() {
    console.log('Hello');
  }
};
console.log(hello2.printHello());