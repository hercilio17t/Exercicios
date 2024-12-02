/*
Contador de vogais
Problema
Você está desenvolvendo a funcionalidade de um programa responsável por detectar um possível erro na escrita de uma palavra. 
Para isso, sabe-se que TODA palavra da língua portuguesa precisa de pelo menos uma vogal.

Entrada
A entrada do problema será sempre composta uma string chamada palavra. 
Essa variável corresponde à palavra a ser analisada pela sua funcionalidade.

Saída
Você deve RETORNAR:

true: caso a palavra tenha pelo menos uma vogal
false: caso a palavra não tenha nenhuma vogal (possível erro)
OBS: as palavras analisadas passam por uma funcionalidade que transforma todas as suas letras em minúsculas. 
Ou seja, você não precisa se preocupar em verificar vogais maiúsculas.
*/

function solucao(palavra: string): boolean {
  // seu código aqui
  for(let vogal of palavra){
    if(vogal === 'a' || vogal === 'e' || vogal === 'i' || vogal === 'o' || vogal === 'u'){
      return true
    }
  }
  return false
}

export default solucao;
