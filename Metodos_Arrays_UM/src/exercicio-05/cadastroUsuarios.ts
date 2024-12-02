/*
Problema
Você está desenvolvendo a funcionalidade de cadastro de um novo usuário.

Uma regra de negócio a ser verificada é que dois usuários não podem ter o mesmo e-mail. 
Sendo assim, antes de efetuar o cadastro do usuário no sistema, você deve verificar se o e-mail digitado por ele é válido.

Entrada
A entrada será composta por duas variáveis:

usuariosCadastrados: array de objetos. Cada objeto contém as propriedades nome, email e senha
novoUsuario: objeto contendo as propriedades nome, email e senha, formado pelo nome, email e senha digitados pelo usuário
Saída
Seu programa deve RETORNAR:

A nova lista de usuários cadastrados, caso o e-mail seja válido
E-MAIL INVALIDO: se o número digitado já pertencer a outro usuário cadastrado no sistema
*/

type TUsuario = {
  nome: string;
  email: string;
  senha: string;
};

function solucao(usuariosCadastrados: TUsuario[], novoUsuario: TUsuario): TUsuario[] | string {
  // seu código aqui
  for(let i = 0; i < usuariosCadastrados.length; i++){
    if(usuariosCadastrados[i].email === novoUsuario.email){
      return 'E-MAIL INVALIDO'
    }
  }
  usuariosCadastrados.push(novoUsuario)
  return usuariosCadastrados
}
export default solucao;
