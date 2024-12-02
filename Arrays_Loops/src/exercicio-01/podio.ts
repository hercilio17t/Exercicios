/*
Problema
Você, como desenvolvedor de software do UFC (entidade que organiza torneios de artes maciais mistas), está implementando 
a funcionalidade do site que será responsável por mostrar ao usuário os três lutadores mais bem rankeados do mundo, ou seja, 
os três melhores lutadores do mundo.

Entrada
A entrada será uma variável chamada rank, um array de strings que contém os nomes dos lutadores. 
Esse array está ordenado do melhor ao pior lutador.

Saída
Seu programa deve RETORNAR os três melhores lutadores no seguinte formato

"MELHOR_LUTADOR, SEGUNDO_MELHOR, TERCEIRO_MELHOR"
ou seja, os nomes devem estar SEPARADOS POR VÍGULA E UM ESPAÇO EM BRANCO (APENAS UM ESPAÇO) DEPOIS DA VÍRGULA.

OBS: Cuidado com a quantidade de espaços em branco entre os nomes, no começo e no final da string

DICA: faça a questão por passos. Primeiro, tente pegar o nome do melhor lutador, depois do segundo, depois do terceiro, 
e só então tente fazer o que é pedido.
*/

function solucao(rank: string[]): string {
  // seu código aqui
  return `${rank[0]}, ${rank[1]}, ${rank[2]}`
}

export default solucao;
