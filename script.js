"use strict";
// Tipos Primitivos
let minhaString = "Olá, mundo!";
let meuNumero = 123;
let meuBooleano = true;
// Tuplas
let minhaTupla = ["banana", 10];
// Arrays
let meuArray = [1, 2, 3];
let meuArray2 = ["um", "dois", "três"];
// Enums
var Cores;
(function (Cores) {
    Cores[Cores["Vermelho"] = 0] = "Vermelho";
    Cores[Cores["Verde"] = 1] = "Verde";
    Cores[Cores["Azul"] = 2] = "Azul";
})(Cores || (Cores = {}));
let minhaCor = Cores.Vermelho;
// Any
let qualquerCoisa = "teste";
qualquerCoisa = 123;
// Void
function semRetorno() {
    console.log("Não há retorno");
}
// Null e Undefined
let nulo = null;
let indefinido = undefined;
// Union Types
let meuNumeroOuString = 123;
meuNumeroOuString = "teste";
// Type Assertion
let minhaVariavel = "testando";
let tamanhoString = minhaVariavel.length;
function imprimirPessoa(pessoa) {
    console.log("Nome: ", pessoa.nome, ", Idade: ", pessoa.idade);
}
let eu = { nome: "José", idade: 30 };
imprimirPessoa(eu);
// Classes
class Animal {
    _nome;
    constructor(nome) {
        this._nome = nome;
    }
    fazerBarulho() {
        console.log(this._nome, "faz barulho");
    }
}
class Cachorro extends Animal {
    constructor() {
        super("Cachorro");
    }
    latir() {
        console.log("Au au!");
    }
}
let cachorro = new Cachorro();
cachorro.fazerBarulho();
cachorro.latir();
