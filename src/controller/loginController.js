import { Router } from "express";

import addUsuarioService from "../service/login/adicionarUsuarioService.js";
import deletarUsuarioService from "../service/login/deletarUsuarioService.js";
import consultarUsuarioService from "../service/login/ConsultarUsuarioService.js";
import alteraUsuarioService from "../service/login/alterarUsuarioService.js";

const endpoint = Router();


endpoint.get('/login', async (req, resp) => {
    try {
        let registros = await consultarUsuarioService()
        resp.status(200).send(registros);
    } catch (err) {
        resp.status(400).send({error: err.message});
    }
})


endpoint.post('/login', async (req,resp) => {
    try {
        let usuario = req.body

        let idGerado = await addUsuarioService(usuario);

        resp.send({
            id: idGerado
        })
    } catch (err) {
        resp.status(400).send({error:err.message});
    }
})

endpoint.put ('/login/:id', async (req, resp) => {
    try {
        let usuario = req.body
        let id = req.params.id
        await alteraUsuarioService(usuario, id)
        resp.status(200).send();
    } catch (err) {
        resp.status(400).send({error: err.message });
    }
});


endpoint.delete('/login/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        await deletarUsuarioService(id)
        resp.status(200).send()
        
    } catch (err) {
        resp.status(400).send({error: err.message });
    }
})




export default endpoint;