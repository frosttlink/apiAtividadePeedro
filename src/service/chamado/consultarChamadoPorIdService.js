import { consultarChamadoPorUsuario } from "../../repository/chamadoRepository.js";

export default async function consultarChamadoPorIdService(idUsuario){
    let registros = await consultarChamadoPorUsuario(idUsuario);
    
    return registros;
}