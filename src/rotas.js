import loginController from "./controller/loginController.js"
import chamadoController from "./controller/chamadoController.js"

export default function rotas (servidor){
    servidor.use(loginController)
    servidor.use(chamadoController)
}