fs = require("fs").promises;


const exercise = async() => {
    try{

        const data = await fs.readFile('Tercer Clase/Actividad 2/package.json', 'utf-8');
    
        // Crear un objeto con la información solicitada
        const info = {
          contenidoStr: data,
          contenidoObj: JSON.parse(data),
          size: Buffer.byteLength(data),
        };
    
        // Mostrar el objeto info por consola
        console.log(info);
    
        // Guardar el objeto info en un archivo info.json
        await fs.writeFile('info.json', JSON.stringify(info));
    }
   catch (error) {
    // Manejar los errores con throw new Error
    throw new Error(error.message);
  }

}
exercise();
