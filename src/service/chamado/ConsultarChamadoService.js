import { consultarChamado } from "../../repository/chamadoRepository.js";

export default async function consultarChamadoService(){
    let registros = await consultarChamado();
    
    return registros;
}