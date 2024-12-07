import { validaDados } from "../validarCadastro";

describe('Testando a validação dos dados de cadastro', () => {
    test('Todos os campos preenchidos corretamente', () => {
        const dados = {
            nome: "Hercilio",
            email: "hercilio@email.com",
            senha: "senha123"
        };
        expect(validaDados(dados)).toBe(true)
    })

    test('Campo nome vazio', () => {
        const dados = {
            nome: "",
            email: "hercilio@email.com",
            senha: "senha123"
        };
        expect(validaDados(dados)).toBe("Todos os campos são obrigatórios: O campo nome é obrigatório")
    })

    test('Campo email vazio', () => {
        const dados = {
            nome: "Hercilio",
            email: "",
            senha: "senha123"
        };
        expect(validaDados(dados)).toBe("Todos os campos são obrigatórios: O campo email é obrigatório")
    })

    test('Campo senha vazio', () => {
        const dados = {
            nome: "Hercilio",
            email: "hercilio@email.com",
            senha: ""
        };
        expect(validaDados(dados)).toBe("Todos os campos são obrigatórios: O campo senha é obrigatório")
    })
})
