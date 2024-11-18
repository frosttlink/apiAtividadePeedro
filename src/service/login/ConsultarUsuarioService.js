import { consultartLogin } from "../../repository/loginRepository.js";

export default async function consultarUsuarioService(){
    let registros = await consultartLogin();
    
    return registros;
}