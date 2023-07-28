const fs = require("fs");

// let fecha = Date.now().toLocaleString()
fs.writeFile("./createdFile.txt", Date.now().toLocaleString(), (error) => {
    if(error) return console.log("Error al crear el archivo")
    fs.readFile("./createdFile.txt", "utf-8", (error, resultado) => {
        if(error) return console.log("Error al leer el archivo")
        console.log(resultado)
    })
})