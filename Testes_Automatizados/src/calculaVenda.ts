/*
Você está desenvolvendo uma função que calcula o lucro/prejuízo na venda de um determinado 
produto com base no preço de compra e no preço de venda dele.

O lucro/prejuízo é calculado da seguinte forma:

resultadoVenda = precoVenda - precoCompra

Se o resultado da venda for positivo, a empresa teve lucro; se não, teve prejuízo. 
Um resultado igual a zero significa que o produto foi vendido a preço de venda.

Você deve implementar a função e os testes unitários que julgar necessários. 
O nome da função e onde criá-la é uma escolha sua, assim como no caso do teste. 
Sugere-se que crie uma pasta para isolar suas implementações dos arquivos de configuração do projeto (geralmente chamamos essa pasta de "src").

Entrada
A entrada será composta por duas variáveis:

compra: variável do tipo number que armazena o preço que a empresa pagou para comprar o produto
venda: variável do tipo number que armazena o preço que a empresa conseguiu vender o produto
Saída
Seu programa deve RETORNAR:

O valor do lucro é: VALOR_DO_LUCRO: caso a empresa tenha tido lucro
O valor do prejuízo é: VALOR_DO_PREJUIZO: caso a empresa tenha tido prejuízo
Venda a preço de custo: caso não tenha dado nem lucro nem prejuízo
*/

export const calculaVenda = (compra: number, venda: number) => {
    const resultadoVenda = venda - compra

    if(resultadoVenda > 0){
        return `O valor do lucro é: ${resultadoVenda}`
    }

    else if(resultadoVenda < 0){
        return `O valor do prejuízo é: ${resultadoVenda}`
    }

    return `Venda a preço de custo`
    
}