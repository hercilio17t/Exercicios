/*
Problema
Você está desenvolvendo a funcionalidade, em uma aplicação que está trabalhando, 
que mostra uma mensagem de boas-vindas aos novos usuários cadastrados.

Tarefa
Você deve criar uma função chamada mostrarBoasVindas que recebe um parâmetros:

nome: do tipo string, que contém o nome do usuário recém cadastrado
Sua função NÃO DEVE RETORNAR NADA, ela deve apenas MOSTRAR NA TELA a mensagem

BEM-VINDO, NOME_DO_NOVO_USUARIO
Para evitar erros de implementação, você deve tipar as entradas e o retorno da função.
*/

function mostrarBoasVindas(nome: string){
    console.log(`BEM-VINDO, ${nome}`)
}


export default mostrarBoasVindas;
