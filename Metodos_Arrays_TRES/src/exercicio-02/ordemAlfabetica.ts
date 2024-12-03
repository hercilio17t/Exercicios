/*
Problema
Você foi contratado para desenvolver o site de uma escola da sua cidade. 
Uma das funcionalidades necessárias é a de mostrar os alunos em ordem alfabética.

Entrada
A entrada será composta por duas variáveis:

listaAlunos: array de strings que contém os nomes dos alunos da escola
ordemAlfabetica: booleano que indica se o usuário deseja (true) ou não (false) mostrar os alunos em ordem alfabética
Saída
Seu programa deve RETORNAR a lista de alunos em ordem alfabética, caso a variável ordemAlfabetica seja true;
 ou a lista na ordem original, caso a variável ordemAlfabetica seja false.
*/

function solucao(listaAlunos: string[], ordemAlfabetica: boolean): string[] {
  // seu código aqui
  if(ordemAlfabetica === true){

    listaAlunos.sort((item1, item2) => {
      return item1.localeCompare(item2)
    })

  }

  return listaAlunos
  
}
export default solucao;
