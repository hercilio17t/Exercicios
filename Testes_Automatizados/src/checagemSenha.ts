/*
Problema
Você está desenvolvendo uma função que irá checar se a senha que o usuário está tentando cadastrar 
no momento da criação de sua conta está dentro do padrão exigido pela empresa. A senha exigida pela empresa deve:

ter no mínimo 4 caracteres
só pode conter caracteres numéricos
Você deve implementar a função e os testes unitários que julgar necessários. O nome da função e onde criá-la é uma escolha sua, 
assim como no caso do teste. Sugere-se que crie uma pasta para isolar suas implementações dos arquivos de configuração do projeto 
(geralmente chamamos essa pasta de "src").

Entrada
A entrada será composta por uma variável:

senha: variável do tipo string que armazena a senha digitada pelo usuário
Saída
Seu programa deve RETORNAR:

SENHA VALIDA: se a senha do usuário corresponder ao padrão exigido
SENHA INVÁLIDA: se a senha não corresponder ao padrão exigido
*/

function checagemSenha(senha: string){

    const senhaNumerica = Number(senha)

    if(senha.length >= 4 && !isNaN(senhaNumerica)){
        return 'SENHA VALIDA'
    }

    return "SENHA INVALIDA"

}

export default checagemSenha

