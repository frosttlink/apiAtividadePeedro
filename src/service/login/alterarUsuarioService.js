import { alterarUsuario } from "../../repository/loginRepository.js";

export default async function alteraUsuarioService(id,adm){
    let linhasAfetadas = await alterarUsuario(id,adm);

    if(linhasAfetadas == 0)
        throw new Error("Nenhum usuário alterado/encontrado")
}
