/*
Pior lutador
Problema
Em outra parte do programa, você, como desenvolvedor de software do UFC (entidade que organiza torneios de artes maciais mistas), 
deve implementandar a funcionalidade do site que mostrará o pior lutador do mundo segundo o ranking.

Entrada
A entrada será uma variável chamada rank, um array de strings que contém os nomes dos lutadores. 
Esse array está ordenado do melhor ao pior lutador.

Saída
Seu programa deve RETORNAR o nome do pior lutador.
*/

function solucao(rank: string[]): string {
  // seu código aqui
  return rank[rank.length-1]
}

export default solucao;
