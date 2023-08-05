import express from "express";

const app = express();

app.get("/bienvenida",(req,res) => {
    res.send("<h1 style='color:blue' >Hola mundo</h1>");
})

app.get("/usuario", (req,res)=>{
    res.send({
        nombre: "Juan",
        apellido: "Bogado",
        edad: 24,
        correo: "juanjobogado13@gmail.com"
    })
})

app.listen(8080,()=> console.log("Servidor iniciado"));