/*
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes
*/

console.log("\nClasses");
class Livro {
  constructor(titulo, autor, ano, editora) {
    this.titulo = titulo;
    this.ano = ano;
    this.autor = autor;
    this.editora = editora;
  }
  imprime_editora() {
    console.log(this.editora);
  }
}

let livro = new Livro("Lógica de Programação com JavaScript", "Edécio Fernando Iepsen" )

console.log(livro); 

console.log("\nsetando valores");
livro.ano = 2023; 
livro["editora"] = "Novatec"; 

console.log(livro); 


//Herança
console.log("\nHerança");
class Livro_TI extends Livro {
  constructor(titulo, autor, ano, editora, tecnologia) {
    super(titulo, autor, ano, editora); 
    this.tecnologia = tecnologia;
  }
  imprime_tecnologia() {
    console.log(this.tecnologia);
  }
}

let livro_TI = new Livro_TI(
  'Programação Web com Node e Express',
  'Ethan Brown',
  '2020',
  'Novatec',
  'JavaScript'
);

console.log(livro_TI.titulo);
livro_TI.imprime_tecnologia();


// getter e setters 
console.log("\ngetter e setters de acesso"); // {4}
class Pessoa {
  constructor(nome) {
    this._nome = nome;
  }
  get nome() {
    return this._nome;
  }
  set nome(value) {
    this._nome = value;
  }
}
let pessoa = new Pessoa('Frodo');
console.log(pessoa.nome); 
pessoa.nome = 'Gandalf'; 
console.log(pessoa.nome);
pessoa._nome = 'Sam'; 
console.log(pessoa.nome);



// usando symbols para atributos private
console.log("\nusando symbols para atributos private"); // {4}
let _nome = Symbol();
class Pessoa2 {
  constructor(nome) {
    this[_nome] = nome;
  }

  get nome() {
    return this[_nome];
  }

  set nome(value) {
    this[_nome] = value;
  }
}

let pessoa2 = new Pessoa2('Frodo');
console.log(pessoa2.nome);
pessoa2.nome = 'Gandalf';
console.log(pessoa2.nome);
pessoa2._nome = 'Sam';
console.log(pessoa2.nome);

console.log(Object.getOwnPropertySymbols(pessoa2));
