import con from "./connection.js"

export async function addUsuario(usuario) {
    let comando = `
        insert into tb_login (ds_email, nm_usuario, ds_senha)
        values (?,?,?)
    `;

    let resposta = await con.query(comando, [usuario.email, usuario.nome, usuario.senha]);

    let info = resposta[0];
    let idUsuario = info.insertId;
    return idUsuario;
}

export async function alterarUsuario(usuario, id) {
    let comando = `
        update tb_login 
        set ds_email = ?,
        nm_usuario = ?,
        ds_senha = ?
        where id_usuario = ?
    `

    let resposta = await con.query(comando, [usuario.email, usuario.nome, usuario.senha, id]);

    let info = resposta[0];
    let linhas = info.affectedRows;
    return linhas
}

export async function deletarUsuario(id) {
    let comando = `
    delete from tb_login where id_usuario = ?
    `;
        let resposta = await con.query (comando, [ 
        id
    ]);
    
    let info = resposta[0];
    let linhas = info.affectedRows;
    return linhas;
    
}

export async function consultartLogin() {
    let comando = `
    select id_usuario, ds_email, nm_usuario, ds_senha 
    from tb_login
    `;
    let resposta = await con.query(comando);
    let registros = resposta[0]
    return registros
}