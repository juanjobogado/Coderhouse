function mostrarLista(lista) {
    if (lista !== undefined) {
      if (lista.length === 0) {
        console.log("Lista vacía");
      } else {
        for (let i = 0; i < lista.length; i++) {
          console.log(lista[i]);
        }
        console.log(`Longitud de la lista: ${lista.length}`);
      }
    } else {
      console.log("La lista no está definida");
    }
  }

  const lista1 = [];
mostrarLista(lista1);
// // Salida: Lista vacía

// const lista2 = ["a", "b", "c"];
// mostrarLista(lista2);
// // Salida:
// // a
// // b
// // c
// // Longitud de la lista: 3