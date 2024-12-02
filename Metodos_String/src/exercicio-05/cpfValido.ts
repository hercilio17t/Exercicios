/*
Problema
Você está desenvolvendo a funcionalidade que verificará se o CPF digitado pelo usuário no cadastro dos seus dados pessoais é válido.

Para ser um CPF válido, ele deve:

conter 11 digítos
possuir um traço
depois do traço, deve ter apenas dois digitos.
Ou seja, ele deve ter o seguinte formato

XXXXXXXXX-XX
Veja que tem-se 11 dígitos desconsiderando o traço.

Entrada
A entrada será composta por uma variável chamada cpf, do tipo string, contendo o CPF do usuário.

Saída
Seu programa deve RETORNAR:

CPF VALIDO: se o CPF digitado for válido
CPF INVALIDO: se o CPF digitado for não válido
*/

function solucao(cpf: string): string {

  const temTraco: boolean = cpf.includes("-")
  const cpfArray: string[] = cpf.split("-")

  if(cpfArray[0].length === 9 && cpfArray[1].length === 2 && temTraco){
    return 'CPF VALIDO'
  }
  return 'CPF INVALIDO'

}

export default solucao


