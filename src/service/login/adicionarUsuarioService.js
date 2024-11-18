import { addUsuario } from "../../repository/loginRepository.js";

export default async function addUsuarioService(usuario) {
    let idGerado = await addUsuario(usuario)
    return idGerado
}