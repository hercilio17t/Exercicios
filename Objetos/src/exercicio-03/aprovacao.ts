/*
Problema
Você está desenvolvendo um programa de avaliação de alunos. 
O programa deve, a partir dos dados de um aluno consultado (matrícula, nome, média) pelo professor, dizer se ele foi aprovado ou reprovado. 
Alunos aprovados são aqueles que possuem média de, no mínimo, 6.

Entrada
A entrada será uma variável será composta por uma variável do tipo objeto, chamada aluno, que possue três propriedades:

matricula: do tipo string que contém o número da matricula do aluno
nome: do tipo string que contém o nome do aluno
media: do tipo number que contém a média do aluno
Saída
Seu programa deve RETORNAR:

APROVADO: caso o aluno tenha sido aprovado
REPROVADO: caso o aluno tenha sido reprovado
*/

type TAluno = { matricula: string; nome: string; media: number };

function solucao(aluno: TAluno): string {
  // seu código aqui
  if(aluno.media < 6){
    return 'REPROVADO'
  }
  return 'APROVADO'
}

export default solucao;
