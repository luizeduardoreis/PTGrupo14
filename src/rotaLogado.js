import express from "express"
import {PrismaClient} from "@prisma/client"

const rotas = express.Router()
const prisma = new PrismaClient(); 

// CREATE
rotas.post("/logado", async (request, response) => {
    const {user} = request.body;

    const usuario = await prisma.logado.create({
        data:{
            username: user
        },
    });
    return response.status(201).json(usuario)

});