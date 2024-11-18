import { alterarChamado } from "../../repository/chamadoRepository.js";

export default async function alterarChamadoService(id,chamado){
    let linhasAfetadas = await alterarChamado(id,chamado);

    if(linhasAfetadas == 0)
        throw new Error("Nenhum chamado alterado/encontrado")
}
