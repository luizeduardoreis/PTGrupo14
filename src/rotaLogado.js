import express from "express"
import {PrismaClient} from "@prisma/client"

const rotas = express.Router()
const prisma = new PrismaClient(); 

// CREATE
rotas.post("/logado", async (request, response) => {
    const {user} = request.body;
    const logado = await prisma.logado.create({
        data:{
            username: user,
        }
    });

    return response.status(201).json(logado)
});

rotas.get("/logado", async (request, response) => {
    const usuario = await prisma.logado.findMany()
    return response.status(200).json(usuario[usuario.length - 1].username)
});

export default rotas;