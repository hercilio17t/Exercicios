/*
Problema
Você está desenvolvendo a funcionalidade que verificará se o e-mail digitado pelo usuário no cadastro dos seus dados pessoais é válido.

Para ser um e-mail válido, ele deve conter um caracter "@".

Entrada
A entrada será composta por uma variável chamada email, do tipo string, contendo o e-mail do usuário.

Saída
Seu programa deve RETORNAR:

VALIDO: se o e-mail digitado for válido
INVALIDO: se o e-mail digitado for não válido
*/

function solucao(email: string): string {
  // seu código aqui
  const temArroba:boolean = email.includes('@')
  
  if(temArroba){
    return 'VALIDO'
  }
  return 'INVALIDO'

}

export default solucao;
