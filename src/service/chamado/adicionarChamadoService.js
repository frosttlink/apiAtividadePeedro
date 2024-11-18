import { addChamado } from "../../repository/chamadoRepository.js"

export default async function addChamadoService(chamado) {
    let idGerado = await addChamado(chamado)
    return idGerado
}