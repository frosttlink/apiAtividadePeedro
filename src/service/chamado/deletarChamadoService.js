import { deletarChamado } from "../../repository/chamadoRepository.js"

export default async function deletarChamadoService(id) {
  let linhasAfetadas = await deletarChamado(id)

  if(linhasAfetadas == 0) throw new Error("Nenhuma linha deletada/encontrada")
  }