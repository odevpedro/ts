"use strict";
const produto = "Livro";
const preco = 200;
const carro = {
    marca: "Audi",
    portas: 5,
};
carro.marca = "Suzuki";
const nintendo = {
    nome: "Nintendo",
    preco: "200",
};
function transformarPreco(produto) {
    produto.preco = 'R$ ' + produto.preco;
    return produto;
}
const produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo);
// Inference O ts consegue inferir o tipo de dados de expressões em javascript. Sempre que ele conseguir inferir, você não precisa fazer a anotação do dado
//inferencia seria fazer uma leitura do js sem executa-lo
