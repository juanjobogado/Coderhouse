fs = require("fs");


const exercise = async() => {
    const data = await fs.readFile('package.json', 'utf8');

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
  } catch (error) {
    // Manejar los errores con throw new Error
    throw new Error(error.message);
  }

  exercise();
