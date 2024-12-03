/*
Problema
Você trabalha como desenvolvedor de software para a FIFA, entidade que rege o futebol no mundo. 
Uma das funcionalidades que está desenvolvendo é a de mostrar, de forma ordenada, os times que mais ganharam títulos em seus respectivos países.

Entrada
A entrada será composta por duas variáveis:

times: array de objetos contendo informações dos times. Cada objeto armazena as seguintes propriedades: "nome", 
"pais" e "quantidadeTitulos", que representam, respectivamente, o nome do time, o país ao qual o time pertence e a 
quantidade de títulos que ele possui
paisFiltrado: string que indica o país do time que o usuário deseja consultar
Saída
Seu programa deve RETORNAR os times do país desejado em ordem decrescente de quantidades de títulos. 
Caso não seja encontrado nenhum time do país desejado, seu programa deve retornar "NAO ENCONTRADO".
*/

type TTime = {
  nome: string;
  pais: string;
  quantidadeTitulos: number;
};

function solucao(times: TTime[], paisFiltrado: string): TTime[] | string {
  // seu código aqui
  const timesFiltrados = times.filter(time => time.pais === paisFiltrado);

  if (timesFiltrados.length === 0) {
    return "NAO ENCONTRADO";
  }

  return timesFiltrados.sort((a, b) => b.quantidadeTitulos - a.quantidadeTitulos);
}
export default solucao;
