/*
Problema
Você está desenvolvendo a funcionalidade de recuperação de senha de um sistemas.

Quando o usuário quiser solicitar uma nova senha, ele deve informar se o número do celular 
cadastrado no sistema ainda corresponde ao número que ele usa. 
Por motivos de segurança, mostra-se apenas os dois primeiros e os dois últimos dígitos do número cadastrado precedidos de "*". 
Por exemplo ao invés de mostrar

31012345678
será mostrado

31*******78
Entrada
A entrada será composta por uma variável chamada numeroCadastrado, do tipo string, contendo o número do usuário cadastrado no sistema.

Saída
Seu programa deve RETORNAR o número formadado com os caracteres "*".
*/

function solucao(numeroCadastrado: string): string {
  // seu código aqui
  const finalNumber: string = numeroCadastrado.slice(-2)
  const inicioNumber: string = numeroCadastrado.slice(0, 2)

  const numeroFormatado: string = inicioNumber + finalNumber.padStart(9, '*')

  return numeroFormatado

}

export default solucao;
