/*
Menor Preço
Problema
Na tentativa de comprar produtos mais baratos, você está desenvolvendo um programa que coleta dados 
de um determinado produto na internet e retorna a loja que oferece o menor preço de venda.

Entrada
A sua entrada é um array de objetos chamado produtosEncontrados, em que cada posição do array representa 
um objeto com as seguintes propriedades:

loja: do tipo string que contém o nome da loja que está oferecendo o produto
preco: do tipo number que contém o preço do produto
Saída
Você deve imprimir a loja que oferece o produto ao menor preço.
*/

type TProduto = { loja: string; preco: number };

function solucao(produtosEncontrados: TProduto[]): string {
  // seu código aqui

  let menorPreco: number = produtosEncontrados[0].preco
  let menorPrecoLoja: string = produtosEncontrados[0].loja

  for(let i = 1; i < produtosEncontrados.length; i++){

    if(produtosEncontrados[i].preco < menorPreco){
      menorPreco = produtosEncontrados[i].preco
      menorPrecoLoja = produtosEncontrados[i].loja
    }

  }

  return menorPrecoLoja
}

export default solucao;
