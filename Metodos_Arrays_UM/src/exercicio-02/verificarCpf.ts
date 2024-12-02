/*
Problema
Você está implementando a funcionalidade do sistema web que está desenvolvendo que impede que 
dois usuários sejam cadastrados com o mesmo CPF, já que esse número é único.

Entrada
A entrada será composta por duas variáveis:

cpfsCadastrados: do tipo array de strings, contendo os CPFs cadastrados no sistema

cpfDigitado: do tipo string, contendo o CPF digitado pelo usuário no momento da tentativa de cadastro no sistema

Saída
Seu programa deve RETORNAR:

CPF JA CADASTRADO: caso o CPF digitado já exista no sistema
CADASTRO REALIZADO COM SUCESSO: caso contrário
*/

function solucao(cpfsCadastrados: string[], cpfDigitado: string): string {
  // seu código aqui
  if(cpfsCadastrados.includes(cpfDigitado)){
    return 'CPF JA CADASTRADO'
  }
  return 'CADASTRO REALIZADO COM SUCESSO'
}
export default solucao;
