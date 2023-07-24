import express from "express"
import {PrismaClient} from "@prisma/client"

const rotaLogado = express.Router()
const prisma = new PrismaClient(); 

// CREATE
rotaLogado.post("/logado", async (request, response) => {
    const {user} = request.body;

    const usuarioLogado = await prisma.logado.create({
        data:{
            username: user
        },
    });
    return response.status(201).json(usuarioLogado)

});

export default rotaLogado;