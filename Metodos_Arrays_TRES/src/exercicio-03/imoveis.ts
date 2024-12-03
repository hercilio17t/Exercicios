/*
Problema
Você trabalha para uma empresa de aluguel de imóveis e precisa de um sistema que permita ao 
usuário listar os anúncios em ordem crescente de acordo com o valor do aluguel (do mais barato ao mais caro).

Entrada
A entrada será composta por uma variável:

anuncios: array de objetos. Cada objeto armazena as propriedades titulo, descricao e preco de um imóvel anunciado
Saída
Seu programa deve RETORNAR:

NAO ENCONTRADO: caso a lista de imóveis esteja vazia
A lista de imóveis em ordem crescente de acordo com o valor do aluguel
*/

type TAnuncio = {
  titulo: string;
  descricao: string;
  preco: number;
};

function solucao(anuncios: TAnuncio[]): TAnuncio[] | string {
  // seu código aqui
  if(anuncios.length === 0){
    return 'NAO ENCONTRADO'
  }

  return anuncios.sort((a, b) => a.preco - b.preco)
  
}
export default solucao;
