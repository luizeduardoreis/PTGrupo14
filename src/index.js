import express, { json } from "express";
import rota from "./rotaUsers.js"


const app = express()

app.use(json());
app.use(rota);

app.listen(3000, () => {
    console.log("Server running on port 3000")
})

console.log("Hello world!")


