/*
Problema
Você foi contratado por um restaurante para desenvolver um sistema que mostre ao cliente o valor de um prato.

Entrada
A entrada será formada uma variável chamada informacoesPrato, que contém duas propriedades:

nome: do tipo string que contém o nome do prato
valor: do tipo number que contém o valor do prato
quantidade: quantidade daquele prato disponível em estoque
Saída
Seu programa deve RETORNAR:

o valor do prato: caso tenha algum disponível no estoque
PRATO INDISPONIVEL caso não tenha nenhum prato disponível no estoque
*/

type TPrato = { nome: string; valor: number; quantidade: number };

function solucao(informacoesPrato: TPrato): number | string {
  // seu código aqui
  if(informacoesPrato.quantidade > 0){
    return informacoesPrato.valor
  }
  return 'PRATO INDISPONIVEL'
}

export default solucao;
