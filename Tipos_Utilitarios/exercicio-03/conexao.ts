/*
Restringindo retorno de função
Problema
A função conexao do arquivo conexao.ts, presente na pasta referente a este exercício, 
monta o objeto para conexão com o banco de dados Postgres e retorna o objeto formatado. 
O problema é que do jeito que foi implementada, quando a função é chamada e atribuída a uma variável, o objeto pode ser modificado.

Modifique a função para que ela não permita modificar o objeto criado após a chamada da função.
*/

type Conn = {
    username: string,
    password: string,
    host: string,
    port: string,
    dbname: string
}

const conexao = (dados: Conn) => {
    const { username, password, host, port, dbname } = dados;
    return {
        driver: 'postgres',
        url: `postgresql://${username}:${password}@${host}:${port}/${dbname}`
    };
}