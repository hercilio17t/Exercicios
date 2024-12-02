/*
Problema
Você foi contratado para desenvolver um programa que verifica se uma moeda inserida em uma máquina de lanches é válida ou não.

Essa máquina possui uma câmera que tira uma foto da moeda inserida, passa essa foto por um algoritmo de visão computacional (
programa que imita a capacidade humana de enxergar) e esse algoritmo te entrega qual o valor da moeda inserida.

Tarefa
Você deve criar uma função chamada verificarValidade que recebe dois parâmetros:

valorLido: do tipo number, que contém o valor identificado pelo algoritmo de visão computacional
valoresValidos: um array numérico que contém os valores de moedas válidas
Sua função deve RETORNAR

true: se o valor identificado for um dos valores de moedas válidas
false: caso contrário
Para evitar erros de implementação, você deve tipar as entradas e o retorno da função.
*/

const verificarValidade = (valorLido: number, valoresValidos: number[]) => {
    for(let i = 0; i < valoresValidos.length; i++){
        if(valorLido === valoresValidos[i]){
            return true
        }
    }
    return false
}

export default verificarValidade;
