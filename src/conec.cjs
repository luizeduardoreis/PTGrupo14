const Client = require("pg").Client
const cliente = new Client({
    user: "postgres",
    password: "1234", // coloque sua senha do postgres
    host: "127.0.0.1",
    port: 5432,
    database: "usuarios"
})

cliente.connect() // abre conexao com o banco
cliente.query("select * from usuarios") // executar a querry SQL
.then(results => { //jogar o resultado da querry no results
    const resultado = results.rows // pega do .query e transforma em colunas
    console.table(resultado) // exibe no console o resultado

})
.finally(() => cliente.end()) // fecha a conexao

async function getUsuarios(){
try{
    console.log("iniciando a conexao.")
    await cliente.connect()
    console.log("Conexao bem sucedidida!")
    const resultado = await cliente.query("select * from Usuarios")
    console.table(resultado.rows)
}
catch (ex){
    console.log("Ocorreu erro no getUsuarios. Erro "+ex)

}
finally{
    await cliente.end()
    console("Cliente desconectado")
}
}

async function insUsuarios(id, username, senha, genero, email, cargo){
    try{
        console.log("iniciando a conexao.")
        await cliente.connect()
        console.log("Conexao bem sucedidida!")
        await cliente.query('insert into Usuarios("id", "username", "senha", "genero", "email", "cargo") values ('+"'"+id+"', '"+senha+"', '"+genero+"', '"+email+"', '"+cargo+"');")
        console.log("Valor inserido na tabela")

        const resultado = await cliente.query("select * from Usuarios")
        console.table(resultado.rows)
        
    }
    catch (ex){
        console.log("Ocorreu erro no insUsuarios. Erro "+ex)
    
    }
    finally{
        await cliente.end()
        console("Cliente desconectado")
    }
}


