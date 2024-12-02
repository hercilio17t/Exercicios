/*
Problema
Você está desenvolvendo um programa que irá premiar com um carro a pessoa que tiver comprado a cartela com o número sorteado.

Tarefa
Você deve criar uma função chamada verificarPremiado, que recebe como parâmetro duas variáveis

numeroSorteado: do tipo number, que contém o número sorteado
pessoasConcorrendo: um array de objetos, que contém os dados das pessoas que estão concorrendo ao sorteio. 
Cada objeto deste array possui duas propriedades:
nome: do tipo string, que contém o nome da pessoa
numeroCartela: do tipo number, que contém o número da cartela comprada
Sua função deve RETORNAR:

o nome da pessoa, caso alguém tenha ganhado
undefined, caso ninguém tenha ganhado (o número sorteado não foi encontrado em nenhuma das cartelas)
Para evitar erros de implementação, você deve tipar as entradas e o retorno da função.

DICA: crie um tipo "pessoa".
*/

type TPessoa = {
    nome: string,
    numeroCartela: number
}

function verificarPremiado(numeroSorteado: number, pessoasConcorrendo: TPessoa[]){
    for(let i = 0; i < pessoasConcorrendo.length; i++){
        if(numeroSorteado === pessoasConcorrendo[i].numeroCartela){
            return pessoasConcorrendo[i].nome
        }
    }
    return undefined
}

export default verificarPremiado;
