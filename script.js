//@ts-check
const produtos = [
    { nome: 'O senhor dos anéis', tipo: 'livro' },
    { nome: 'Harry Potter e a Pedra Filosofal', tipo: 'livro' },
    { nome: 'Iphone XR', tipo: 'eletrônico' }
  ]

  function filtraLivros(dados){
    return dados.filter((item) => item.tipo === 'livro' );
  }

  console.log(filtraLivros(produtos));