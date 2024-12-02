/*
Melhor Filme
Problema
Você está desenvolvendo um sistema em que o usuário seleciona dois filmes que ele deseja assistir e o programa retorna 
o melhor deles baseado na média das notas que ambos têm no IMDb e Rotten Tomatoes, dois sites especializados em filmes e séries.

O cálculo da média é feito da seguinte forma:

media = (notamdb + notaRottenTomatoes) / 2

Entrada
Sua entrada será composta de duas variáveis:

filme1: objeto que contém as informações do primeiro filme selecionado pelo usuário
filme2: objeto que contém as informações do segundo filme selecionado pelo usuário
Cada objeto possui duas propriedades:

nome: do tipo string que contém o nome do filme
notas: do tipo array de number que contém, em cada uma de suas posicões, as notas do filme no IMDb e no Rotten Tomatoes
Saída
Você deve RETORNAR:

o nome do filme com a média das notas mais alta
EMPATE: caso as médias sejam iguais
*/

type TFilme = { nome: string; notas: number[] };

function solucao(filme1: TFilme, filme2: TFilme): string {
  // seu código aqui
  if(filme1.notas > filme2.notas){
    return filme1.nome
  }
  else if(filme1.notas < filme2.notas){
    return filme2.nome
  }
  return 'EMPATE'
}

export default solucao;
