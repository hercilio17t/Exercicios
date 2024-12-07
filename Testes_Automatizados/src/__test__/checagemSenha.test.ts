import checagemSenha from "../checagemSenha"

describe('Testando a função calculaVenda', () => {

    test('Deve calcular um lucro positivo', function(){
    expect(checagemSenha("1234")).toBe("SENHA VALIDA")
    })

    test('Deve calcular um lucro positivo', function(){
        expect(checagemSenha("123")).toBe("SENHA INVALIDA")
        })
    
    test('Calcular se o resultado da venda foi negativo', function(){
    expect(checagemSenha("123a")).toBe("SENHA INVALIDA")
    })
})