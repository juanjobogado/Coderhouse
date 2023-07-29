// Importar el módulo fs.promises
const fs = require('fs').promises;

// Definir la clase ManagerUsuarios
class ManagerUsuarios {
  // Definir el constructor
  constructor() {
    // Inicializar la propiedad usuarios como un arreglo vacío
    this.usuarios = [];
  }

  // Definir el método crearUsuario
  async crearUsuario(usuario) {
    // Agregar el usuario al arreglo de usuarios
    this.usuarios.push(usuario);
    // Escribir el arreglo de usuarios en el archivo usuarios.json
    await fs.writeFile('usuarios.json', JSON.stringify(this.usuarios));
  }

  // Definir el método consultarUsuarios
  async consultarUsuarios() {
    // Leer el archivo usuarios.json
    const data = await fs.readFile('usuarios.json', 'utf8');
    // Parsear el contenido del archivo
    const usuarios = JSON.parse(data);
    // Devolver el arreglo de usuarios
    return usuarios;
  }
}

// Exportar la clase ManagerUsuarios
module.exports = ManagerUsuarios;
