/*
Problema
Você trabalha como desenvolvedor de software para uma clínica médica. 
No momento, você está desenvolvendo a funcionalidade do sistema responsável pelo cancelamento de agendamentos de consultas.

Entrada
A entrada será composta por duas variáveis:

agenda: array de strings que armazena os nomes dos pacientes agendados
cancelamento: string contendo o nome do paciente que deseja cancelar o agendamento
Saída
Seu programa deve RETORNAR:

Agenda atualizada sem o nome do paciente que solicitou o cancelamento, caso o paciente tenha sido agendado
PACIENTE NAO AGENDADO: caso o paciente não tenha sido agendado
Exemplos
*/

function solucao(agenda: string[], cancelamento: string): string | string[] {
  // seu código aqui
  if(agenda.includes(cancelamento)){
    const novaAgenda: string[] = agenda.filter((pacientes) => {
      return pacientes != cancelamento 
    })
    return novaAgenda
  }
  return 'PACIENTE NAO AGENDADO'

}
export default solucao;
