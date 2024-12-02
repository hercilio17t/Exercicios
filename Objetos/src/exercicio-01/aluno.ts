/*
Problema
Você foi contratado por uma escola da sua cidade para desenvolver um sistema para armazenar informações dos alunos de uma turma. 
Esse programa deve receber os dados de um aluno (matrícula, nome e idade) e os armazenar em um objeto.

Entrada
A entrada será uma variável será composta por três variáveis:

matricula: do tipo string que contém o número da matricula do aluno
nome: do tipo string que contém o nome do aluno
idade: do tipo number que contém a idade do aluno
Saída
Seu programa deve RETORNAR um objeto no seguinte formato:

{
  matricula: "MATRICULA_DO_ALUNO",
  nome: "NOME_DO_ALUNO",
  idade: IDADE_DO_ALUNO
}
*/

type TAluno = { matricula: string; nome: string; idade: number };

function solucao(matricula: string, nome: string, idade: number): TAluno {
  // seu código aqui
  const aluno: TAluno = {
    matricula,
    nome,
    idade
  }

  return aluno
}

export default solucao;
