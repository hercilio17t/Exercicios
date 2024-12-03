/*
Problema
Você está desenvolvendo a funcionalidade de um site responsável por filtrar os produtos por preço.

Entrada
A entrada será composta por duas variáveis:

precos: array de number contendo os preços dos produtos anunciados pelo site
filtroPreco: string que mostra o tipo de filtro que o usuário deseja. Os possíveis valores são 
"crescente" ou "decrescente", caso o usuário deseje, respectivamente, ordenar os preços de forma crescente ou decrescente.
Saída
Seu programa deve RETORNAR a lista de preços ordenada.
*/

type TFiltroPreco = "crescente" | "decrescente";

function solucao(precos: number[], filtroPreco: TFiltroPreco): number[] {
  // seu código aqui
  if(filtroPreco === 'crescente'){
    return precos.sort((a, b) => a - b)
  }
  else if(filtroPreco === 'decrescente'){
    return precos.sort((a, b) => b - a)
  }
  return precos

}
export default solucao;
