/*
Problema
Você, como desenvolvedor contratado pela biblioteca pública da sua cidade, 
está desenvolvendo um sistema de catalogação de livros. Uma das funcionalidades essenciais é 
a capacidade de inverter a ordem dos livros em uma prateleira.

Entrada
A entrada será composta por uma variável chamada livros, um array de strings contendo os nomes dos livros catalogados na ordem direta.

Saída
Seu programa deve RETORNAR:

livros na ordem inversa, caso haja algum livro catalogado
NENHUM LIVRO ENCONTRADO: caso não haja nenhum livro catalogado
*/

function solucao(livros: string[]): string | string[] {
  // seu código aqui
  if(livros.length > 0){
    return livros.reverse()
  }
  return 'NENHUM LIVRO ENCONTRADO'
}
export default solucao;
