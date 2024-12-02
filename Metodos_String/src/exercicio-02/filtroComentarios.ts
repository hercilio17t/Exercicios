/*
Problema
Assim como o YouTube bloqueia vídeos que citam as palavras "pandemia" ou "covid", 
uma rede social precisa bloquear qualquer comentário que também possua uma dessas duas palavras.

Você está responsável por desenvolver essa lógica.

DICA: para não precisar se preocupar com letras maiúsculas e minúsculas, 
faça uma transformação na entrada para que ela fique ou toda em maiúscula ou toda em minúscula.

Entrada
A entrada será composta por uma variável chamada comentario, do tipo string, contendo o comentário a ser analisado.

Saída
Seu programa deve RETORNAR:

true: caso o comentário não possua nenhuma dessas palavras
false: caso o comentário possua alguma dessas palavras
*/

function solucao(comentario: string): boolean {
  // seu código aqui
  const comentarioMinusculo: string = comentario.toLowerCase()

  if(comentarioMinusculo.includes('covid') || comentarioMinusculo.includes('pandemia')){
    return false
  }
  return true

}
export default solucao;
