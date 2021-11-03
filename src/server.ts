import express from "express"

const app = express()

/*
    GET => buscar uma informação
    POST => inserir (criar) uma informação
    PUT => alterar uma informação
    DELETE => remover um dado
    PATCH => alterar uma informação especifica
*/

app.get("/test", (request,response) => {
    //request => entrando
    //response => saindo
    return response.send("Olá NLW")
})

app.post("/test-post", (request,response) => {
    return response.send("Olá NLW - Post")
})

app.listen(3000, () => console.log("Server is running"))