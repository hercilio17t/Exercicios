/*
Problema
Você está desenvolvendo uma aplicação que ajuda o usuário a ter o controle dos seus gastos.

Tarefa
Você deve criar uma função chamada calcularNovoSaldo que recebe dois parâmetros:

saldoAtual: do tipo number que contém o saldo atual do usuário
valor: do tipo number que contém o valor do saque, caso seja negativo, ou do depósito, caso seja positivo
Sua função deve RETORNAR o novo saldo do usuário.

Para evitar erros de implementação, você deve tipar as entradas e o retorno da função.
*/

const calcularNovoSaldo = (saldoAtual: number, valor: number) => {
    return saldoAtual + valor
}

export default calcularNovoSaldo;
