var p = document.createElement('p');
var hello = "Hello World";
p.textContent = hello;
document.body.appendChild(p);

var str1:string = "texto 1";
var str2: string = 'texto 2';
var str3: string = `${str1} com concatenação
e quebra de linha`;
console.log(str3);


var p2 = document.createElement('p2');
p2.textContent = str3;
document.body.appendChild(p2);


let x = 10;
x = 16;
console.log(x);

const myNumbers: number[] = [1,2,3];
myNumbers.push(5);
console.log(myNumbers);


class Pessoa {
    private _nome: string;
    private _idade: number;
  
    constructor(nome: string, idade: number) {
      this._nome = nome;
      this._idade = idade;
    }
  
    // Acessor get para o atributo nome
    get nome(): string {
      return this._nome;
    }
  
    // Acessor set para o atributo nome
    set nome(novoNome: string) {
      if (novoNome && novoNome.length > 0) {
        this._nome = novoNome;
      } else {
        throw new Error("O nome não pode ser vazio.");
      }
    }
  
    // Acessor get para o atributo idade
    get idade(): number {
      return this._idade;
    }
  
    // Acessor set para o atributo idade
    set idade(novaIdade: number) {
      if (novaIdade >= 0) {
        this._idade = novaIdade;
      } else {
        throw new Error("A idade não pode ser negativa.");
      }
    }
  }

const pessoa = new Pessoa("João", 30);
console.log(pessoa.nome); // Saída: "João"
console.log(pessoa.idade); // Saída: 30

pessoa.nome = "Maria";
pessoa.idade = 25;
console.log(pessoa.nome); // Saída: "Maria"
console.log(pessoa.idade); // Saída: 25

//------------------- Com Rest Paramter usa ...v2 (3 pontos antes do nome do array)
function addValues(v1: string, ...v2: number[]): void {
  let sum: number = 0;
  for(let i = 0; i < v2.length; i++){
    sum += v2[i];
  }
  console.log(v1 + sum);
}
addValues("Sum is: ", 1,2,3,4);

function addValues2(v1: string, v2: number[]): void {
  let sum: number = 0;
  for(let i = 0; i < v2.length; i++){
    sum += v2[i];
  }
  console.log(v1 + sum);
}
addValues2("Sum is: ", [1,2,3,4]);

//====================

function printName(person: {nome: string}){
  console.log(person.nome);
}

let person1 = {nome: "Brenno", idade: 18};
printName(pessoa);
printName(person1);

interface Person {
  nome: string;
}

interface Employee extends Person{
  salario: number;
}

let person2: Person = {nome: "Brenno2"};
let emp1: Employee = {nome: "Brenno Emp", salario:15000.99}

printName(emp1);
printName(person2);
//======================================

class Funcionario extends Pessoa {
  readonly dtContrato: Date;

  constructor(nome: string, idade: number, dtContrato: Date){
    super(nome, idade);
    this.dtContrato = dtContrato;
  }
}

let func1 = new Funcionario('Brenno', 18, new Date());
console.log(func1)
console.log(func1.nome)
console.log(func1.idade)
//func1.dtContrato = new Date();  --- readOnly


// Funções Anonimas
let functionAnonymous = function (n1: number, n2: number): void {
  console.log(`A media eh: ${(n1+n2)/2}`)
}
functionAnonymous(10,9);

let sumArrow1 = (n1:number, n2:number) => (n1+n2)/2;
console.log(`A media eh: ${sumArrow1(8,7)}`)

let sumArrow2 = (n1:number, n2:number) => {
  return (n1+n2)/2
};
let media = sumArrow2(8,8);
console.log(`A media eh: ${sumArrow2(8,8)}`)
console.log(`A media eh: ${media}`)

// para objetos devemos passarentre ({})
let objectArrow = (firstName:string, lastName:string) => ({
  firstName: firstName,
  lastName: lastName
});
console.log(objectArrow("Brenno", "Costa"));

// Generics
interface Repository<T, ID> {
  findById(id: ID): T;
  save(entity: T): T;
}

class PessoaRepository implements Repository<Pessoa, number>{

  findById(id: number): Pessoa {
    console.log(`Buscando usando o Id: ${id}`)
    return new Pessoa("Brenno", 18);
  }

  save(entity: Pessoa): Pessoa {
    return new Pessoa("Brenno", 18);
  }
}

let pessoaRepository = new PessoaRepository();
console.log(pessoaRepository.findById(1));

pessoaRepository.save(new Pessoa("Diego", 20));