import { calculaVenda } from "../calculaVenda"

describe('Testando a função calculaVenda', () => {
    test('Deve calcular um lucro positivo', function(){
    expect(calculaVenda(2,3)).toBe("O valor do lucro é: 1")
    })
    
    test('Calcular se o resultado da venda foi negativo', function(){
    expect(calculaVenda(3,2)).toBe("O valor do prejuízo é: -1")
    })

    test('Calcular se o resultado da venda foi neutro', function(){
        expect(calculaVenda(2,2)).toBe("Venda a preço de custo")
    })
})