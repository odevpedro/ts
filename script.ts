const produto: string = "Livro";
const preco: number = 200;

const carro: {
  marca: string;
  portas: number;
} = 
{
  marca: "Audi",
  portas: 5,
}

carro.marca = "Suzuki"


// Inference O ts consegue inferir o tipo de dados de expressões em javascript. Sempre que ele conseguir inferir, você não precisa fazer a anotação do dado

//inferencia seria fazer uma leitura do js sem executa-lo

const barato = preco < 400 ? true : 'produto caro'; 