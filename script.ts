// Tipos Primitivos
let minhaString: string = "Olá, mundo!";
let meuNumero: number = 123;
let meuBooleano: boolean = true;

// Tuplas
let minhaTupla: [string, number] = ["banana", 10];

// Arrays
let meuArray: number[] = [1, 2, 3];
let meuArray2: Array<string> = ["um", "dois", "três"];

// Enums
enum Cores {
  Vermelho,
  Verde,
  Azul
}

let minhaCor: Cores = Cores.Vermelho;

// Any
let qualquerCoisa: any = "teste";
qualquerCoisa = 123;

// Void
function semRetorno(): void {
  console.log("Não há retorno");
}

// Null e Undefined
let nulo: null = null;
let indefinido: undefined = undefined;

// Union Types
let meuNumeroOuString: number | string = 123;
meuNumeroOuString = "teste";

// Type Assertion
let minhaVariavel: any = "testando";
let tamanhoString: number = (<string>minhaVariavel).length;

// Interfaces
interface Pessoa {
  nome: string;
  idade: number;
}

function imprimirPessoa(pessoa: Pessoa) {
  console.log("Nome: ", pessoa.nome, ", Idade: ", pessoa.idade);
}

let eu: Pessoa = { nome: "José", idade: 30 };
imprimirPessoa(eu);

// Classes
class Animal {
  private _nome: string;

  constructor(nome: string) {
    this._nome = nome;
  }

  public fazerBarulho() {
    console.log(this._nome, "faz barulho");
  }
}

class Cachorro extends Animal {
  constructor() {
    super("Cachorro");
  }

  public latir() {
    console.log("Au au!");
  }
}

let cachorro = new Cachorro();
cachorro.fazerBarulho();
cachorro.latir();