/*
Problema
Você está desenvolvendo um programa para auxiliá-lo a estimar a probabilidade de vítoria de um determinado time, 
que pode ser aplicado para qualquer esporte.

Para isso, seu programa recebe um objeto com dados de probabilidades de vitória coletados de vários locais na internet 
(veículos especializados, casas de apostas, etc).

Para estimar a chance de vitória, você decidiu usar a média das probabilidades encontradas.

O cálculo da média é:

media = soma das probabilidades / total de dados

Entrada
A entrada será sempre um objeto, denominado dados, contendo as seguintes propriedades:

time: do tipo string, que contém o nome do time procurado
probabilidades: do tipo array, que contém as probabilidades coletadas, em porcentagem, da internet
Saída
Você deverá RETORNAR:

a probabilidade de vítoria do time informado, caso tenha conseguido coletar algum dado
DADOS INSUFICIENTES: caso não tenha conseguido coletar nenhum dado
*/

type TDados = { nome: string; probabilidades: number[] };

function solucao(dados: TDados): number | string {
  // seu código aqui
  if(dados.probabilidades.length === 0){
    return 'DADOS INSUFICIENTES'
  }

  let soma: number = 0

  for(let i = 0; i < dados.probabilidades.length; i++){
    soma = soma + dados.probabilidades[i]
  }

  let media:number = soma / dados.probabilidades.length

  return media

}

export default solucao;
