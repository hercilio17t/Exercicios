/*
Problema
Você está desenvolvendo a funcionalidade que verificará se o número digitado pelo usuário no cadastro do seu endereço é válido.

Entrada
A entrada será composta por uma variável chamada endereco, do tipo string, contendo o endereço do usuário. Essa variável tem a seguinte forma:

NOME_DA_RUA, NUMERO_DA_CASA, CIDADE, ESTADO
Saída
Seu programa deve RETORNAR:

true: se o número digitado for válido
false: se o número digitado for não válidoz
*/

function solucao(endereco: string): boolean {
  // seu código aqui
  const enderecoArray: string[] = endereco.split(", ")
  const numeroConvertido = Number(enderecoArray[1])
  const verificaNumero = isNaN(numeroConvertido)

  if(verificaNumero){
    return false
  }
  return true
}

export default solucao;
