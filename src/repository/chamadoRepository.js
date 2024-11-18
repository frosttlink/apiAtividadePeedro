import con from "./connection.js"

export async function addChamado(chamado) {
    let comando = `
        insert into tb_chamado ( ds_titulo, ds_informacao, ds_impacto, dt_ocorrencia, nm_usuario_responsavel, id_usuario)
        values (?,?,?,?,?,?)
    `;

    let resposta = await con.query(comando, [chamado.titulo, chamado.informacao, chamado.impacto, chamado.ocorrencia, chamado.responsavel, chamado.idUsuario]);

    let info = resposta[0];
    let idChamado = info.insertId;
    return idChamado;
}

export async function alterarChamado(chamado, id) {
    let comando = `
        update tb_chamado 
        set ds_titulo = ?,
        ds_informacao = ?,
        ds_impacto = ?,
        dt_ocorrencia = ?,
        nm_usuario_responsavel = ?,
        id_usuario = ?
        where id_chamado = ?
    `

    let resposta = await con.query(comando, [chamado.titulo, chamado.informacao, chamado.impacto, chamado.ocorrencia, chamado.responsavel, chamado.idUsuario, id]);

    let info = resposta[0];
    let linhas = info.affectedRows;
    return linhas
}

export async function deletarChamado(id) {
    let comando = `
    delete from tb_chamado where id_chamado = ?
    `;
        let resposta = await con.query (comando, [ 
        id
    ]);
    
    let info = resposta[0];
    let linhas = info.affectedRows;
    return linhas;
    
}

export async function consultarChamado() {
    let comando = `
    select id_chamado, ds_titulo, ds_informacao, ds_impacto, dt_ocorrencia, nm_usuario_responsavel, id_usuario
    from tb_chamado
    `;
    let resposta = await con.query(comando);
    let registros = resposta[0]
    return registros
}

export async function consultarChamadoPorUsuario(idUsuario) {
    let comando = `
    select id_chamado, ds_titulo, ds_informacao, ds_impacto, dt_ocorrencia, nm_usuario_responsavel, id_usuario
    from tb_chamado where id_usuario = ?
    `;
    let resposta = await con.query(comando, [idUsuario]);
    let registros = resposta[0]
    return registros
}