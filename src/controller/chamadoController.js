import { Router } from "express";

import addChamadoService from "../service/chamado/adicionarChamadoService.js";
import deletarChamadoService from "../service/chamado/deletarChamadoService.js";
import consultarChamadoPorIdService from "../service/chamado/consultarChamadoPorIdService.js";
import consultarChamadoService from "../service/chamado/ConsultarChamadoService.js";
import alterarChamadoService from "../service/chamado/alterarChamadoService.js";

const endpoint = Router();


endpoint.get('/chamado', async (req, resp) => {
    try {
        let registros = await consultarChamadoService()
        resp.status(200).send(registros);
    } catch (err) {
        resp.status(400).send({error: err.message});
    }
})

endpoint.get('/chamado/:id', async (req, resp) => {
    try {
        let id = req.params.id
        let registros = await consultarChamadoPorIdService(id)
        resp.status(200).send(registros);
    } catch (err) {
        resp.status(400).send({error: err.message});
    }
})


endpoint.post('/chamado', async (req,resp) => {
    try {
        let chamado = req.body

        let idGerado = await addChamadoService(chamado);

        resp.send({
            id: idGerado
        })
    } catch (err) {
        resp.status(400).send({error:err.message});
    }
})

endpoint.put ('/chamado/:id', async (req, resp) => {
    try {
        let chamado = req.body
        let id = req.params.id
        await alterarChamadoService(chamado, id)
        resp.status(200).send();
    } catch (err) {
        resp.status(400).send({error: err.message });
    }
});


endpoint.delete('/chamado/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        await deletarChamadoService(id)
        resp.status(200).send()
        
    } catch (ere) {
        resp.status(400).send({error: err.message });
    }
})




export default endpoint;