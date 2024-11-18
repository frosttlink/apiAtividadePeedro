import { deletarUsuario } from "../../repository/loginRepository.js"

export default async function deletarUsuarioService(id) {
  let linhasAfetadas = await deletarUsuario(id)

  if(linhasAfetadas == 0) throw new Error("Nenhuma linha deletada/encontrada")
  }