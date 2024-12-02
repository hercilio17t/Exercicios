/*
Número de promotores
Problema
O NPS (Net Promoter Score) é um índice que mede a satisfação dos clientes com um determinado produto ou serviço. 
Ele é calculado com base nas respostas a uma única pergunta: 
Qual é a probabilidade de que você recomendar a nossa empresa / produto / serviço a um amigo ou colega? 
A pontuação para esta resposta é um número entre 0 a 10.

Aqueles que respondem com uma pontuação de 9 ou 10 são chamados de Promotores, 
e são considerados propensos a fazer mais referências positivas para outros potenciais clientes.

Aqueles que respondem com uma pontuação de 0 a 6 são rotulados Detratores, e acredita-se ser menos propensos a apresentar 
comportamentos de criação de valor.

Respostas de 7 ou 8 são rotuladas Passivas ou Neutras e seu comportamento cai no meio de promotores e detratores.

Seu objetivo é fazer um programa que calcule a quantidade de clientes promotores, a partir de um array de números, 
em que cada item é resposta dada por um cliente para a pergunta citada acima.

Entrada
A entrada será sempre um array de números chamado notas em que cada item é a resposta dada por um cliente à pergunta 
"Qual é a probabilidade de que você recomendar a nossa empresa / produto / serviço a um amigo ou colega"?

Saída
Seu programa deve RETORNAR a quantidade de clientes que são PROMOTORES.
*/

function solucao(notas: number[]): number {
  // seu código aqui

  let promotores:number = 0

  for(let i = 0; i < notas.length; i++){
    if(notas[i] > 8){
      promotores++
    }
  }
  return promotores
}

export default solucao;
