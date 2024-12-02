/*
Robô separador de frutas
Problema
Um robô precisa coletar frutas de uma esteira e colocar numa caixa. 
Ele usa um sistema de câmeras para identificar quais frutas estão passando.

Você foi contratado pela empresa para realizar a programação deste robô e criar um sistema que mostre aos operadores 
a quantidade de frutas que o robô coletou. A esteira de frutas é representada por um array em que cada posição armazena 
uma fruta diferente que passou pela esteira. O robô recebe como parâmetro qual fruta ele deve coletar.

Entrada
Sua entrada será composta de duas variáveis:

frutaColetada: variável do tipo string que armazena a fruta a ser coletada pelo robô
esteira: array de strings em que cada posição armazena uma fruta que passou pela esteira
Saída
Você deve RETORNAR a quantidade de frutas que o robô coletou.
*/


function solucao(frutaColetada: string, esteira: string[]): number {
  // seu código aqui

  let numFrutas: number = 0
  for(let i = 0; i < esteira.length; i++){
    if(frutaColetada === esteira[i]){
      numFrutas++
    }
  }
  return numFrutas
}

export default solucao;
