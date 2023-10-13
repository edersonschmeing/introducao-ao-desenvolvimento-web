/*
Loiane Groner - Estrutura de Dados e Algoritmos com JavaScript

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_objects

*/


/* Object exemplo 1 */
var obj = new Object();

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
let obj = { x, y };
console.log(obj); // { x: "a", y: "b" }

// swap (https://goo.gl/EyFAII)
[x, y] = [y, x];
var temp = x;
x = y;
y = temp;

// code above is the same as
var x2 = 'a';
var y2 = 'b';
var obj2 = { x2: x2, y2: y2 };
console.log(obj2); // { x: "a", y: "b" }

// Method Properties (https://goo.gl/DKU2PN)
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





//classes


class Livro {
  constructor(titulo, ano, autor) {
    this.titulo = titulo;
    this.ano = autor;
    this.autor = autor;
  }
  printIsbn() {
    console.log(this.isbn);
  }
}

let book = new Book('title', 'pag', 'isbn');

console.log(book.title); // outputs the book title

book.title = 'new title'; // update the value of the book title

console.log(book.title); // outputs the book title


//Herança
class ITBook extends Book { // {1}
  constructor(title, pages, isbn, technology) {
    super(title, pages, isbn); // {2}
    this.technology = technology;
  }

  printTechnology() {
    console.log(this.technology);
  }
}

let jsBook = new ITBook(
  'Learning JS Algorithms',
  '200',
  '1234567890',
  'JavaScript'
);

console.log(jsBook.title);
console.log(jsBook.printTechnology());

// getter and setters (https://goo.gl/SMRYsv)
class Person {
  constructor(name) {
    this._name = name; // {1}
  }

  get name() { // {2}
    return this._name;
  }

  set name(value) { // {3}
    this._name = value;
  }
}

let lotrChar = new Person('Frodo');
console.log(lotrChar.name); // {4}
lotrChar.name = 'Gandalf'; // {5}
console.log(lotrChar.name);
lotrChar._name = 'Sam'; // {6}
console.log(lotrChar.name);

// using symbols for private atributes
var _name = Symbol();
class Person2 {
  constructor(name) {
    this[_name] = name;
  }

  get name() {
    return this[_name];
  }

  set name(value) {
    this[_name] = value;
  }
}

let lotrChar2 = new Person2('Frodo');
console.log(lotrChar2.name);
lotrChar2.name = 'Gandalf';
console.log(lotrChar2.name);

console.log(Object.getOwnPropertySymbols(lotrChar2));
