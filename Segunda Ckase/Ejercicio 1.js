const objetos = [
    {
        manzanas: 3,
        peras:2,
        carne: 1,
        jugos: 5,
        dulces: 2,

    },
    {
        manzanas: 1,
        sandias: 1,
        huevos: 6,
        jugos: 1,
        panes:4
    }
]

// Realizar una lista nueva (array) que contenga todos los tipos de productos (no cantidades)
let tipos = []; // Inicializar el arreglo vacío
// Recorrer el arreglo de objetos
for (let objeto of objetos) {
  // Obtener las claves del objeto con Object.keys
  let claves = Object.keys(objeto);
  // Recorrer las claves del objeto
  for (let clave of claves) {
    // Si el tipo de producto no está en el arreglo, agregarlo con push
    if (!tipos.includes(clave)) {
      tipos.push(clave);
    }
  }
}
// Mostrar el arreglo por consola
console.log(tipos);

// Posteriormente, obtener el total de productos vendidos por todos los objetos
let total = 0; // Inicializar el contador en cero
// Recorrer el arreglo de objetos
for (let objeto of objetos) {
  // Obtener los valores del objeto con Object.values
  let valores = Object.values(objeto);
  // Recorrer los valores del objeto
  for (let valor of valores) {
    // Sumar el valor al contador
    total += valor;
  }
}
// Mostrar el total por consola
console.log(total);