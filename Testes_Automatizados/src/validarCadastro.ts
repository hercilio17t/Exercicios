/*
Validar envio dos dados de cadastro
Problema
Você está desenvolvendo uma função que verifique se o usuário está passando todos os dados exigidos no cadastro. 
Quando o usuário tentar se cadastrar no seu sistema, será enviado um objeto, chamado "dados", contendo as propriedades nome, 
email e senha contendo, respectivamente, o nome digitado, o e-mail digitado e a senha digitada pelo usuário.

Todos os dados são obrigatórios, e sua função deve validar se algum deles não foi passado.

Você deve implementar a função e os testes unitários que julgar necessários. O nome da função e onde criá-la é uma escolha sua, 
assim como no caso do teste. Sugere-se que crie uma pasta para isolar suas implementações dos arquivos de configuração do projeto 
(geralmente chamamos essa pasta de "src").

Entrada
A entrada será composta uma variável:

dados: objeto que armazena nome digitado, o e-mail digitado e a senha digitada
Saída
Seu programa deve RETORNAR:

Todos os campos são obrigatórios: uma mensagem de erro para caso algum campo não tenha sido passado
true: caso todos os campos tiverem sido passados
*/
type TUsuario = {
    nome: string,
    email: string,
    senha: string
}
export const validaDados = (dados: TUsuario) => {

    if (!dados.nome) return "Todos os campos são obrigatórios: O campo nome é obrigatório"
    if (!dados.email) return "Todos os campos são obrigatórios: O campo email é obrigatório"
    if (!dados.senha) return "Todos os campos são obrigatórios: O campo senha é obrigatório"

    return true
}