// Definir función suma
function suma(a, b) {
    // Devolver una promesa
    return new Promise((resolve, reject) => {
      // Si alguno de los sumandos es cero, rechazar la promesa
      if (a === 0 || b === 0) {
        reject("Operación innecesaria");
      } else {
        // Si no, resolver la promesa con el resultado de la suma
        resolve(a + b);
      }
    });
  }
  
  // Definir función resta
  function resta(a, b) {
    // Devolver una promesa
    return new Promise((resolve, reject) => {
      // Si el minuendo o el sustraendo es cero, rechazar la promesa
      if (a === 0 || b === 0) {
        reject("Operación inválida");
      } else {
        // Si no, calcular el resultado de la resta
        let resultado = a - b;
        // Si el resultado es negativo, rechazar la promesa
        if (resultado < 0) {
          reject("La calculadora sólo puede devolver valores positivos");
        } else {
          // Si no, resolver la promesa con el resultado
          resolve(resultado);
        }
      }
    });
  }
  
  // Definir función multiplicación
  function multiplicacion(a, b) {
    // Devolver una promesa
    return new Promise((resolve, reject) => {
      // Si alguno de los factores es negativo, rechazar la promesa
      if (a < 0 || b < 0) {
        reject("La calculadora sólo puede devolver valores positivos");
      } else {
        // Si no, resolver la promesa con el resultado de la multiplicación
        resolve(a * b);
      }
    });
  }
  
  // Definir función división
  function division(a, b) {
    // Devolver una promesa
    return new Promise((resolve, reject) => {
      // Si alguno de los factores es negativo, rechazar la promesa
      if (a < 0 || b < 0) {
        reject("La calculadora sólo puede devolver valores positivos");
      } else {
        // Si no, calcular el resultado de la división
        let resultado = a / b;
        // Si el resultado es NaN o Infinity, rechazar la promesa
        if (isNaN(resultado) || !isFinite(resultado)) {
          reject("Operación inválida");
        } else {
          // Si no, resolver la promesa con el resultado
          resolve(resultado);
        }
      }
    });
  }
  
  // Definir una función asíncrona "calculos"
  async function calculos() {
    try {
      // Realizar pruebas con async await y try catch
      let s1 = await suma(2, 3); // Debe resolver con 5
      console.log(s1);
      let s2 = await suma(0, 4); // Debe rechazar con "Operación innecesaria"
      console.log(s2);
      let r1 = await resta(5, 3); // Debe resolver con 2
      console.log(r1);
      let r2 = await resta(3, 5); // Debe rechazar con "La calculadora sólo puede devolver valores positivos"
      console.log(r2);
      let m1 = await multiplicacion(2, 3); // Debe resolver con 6
      console.log(m1);
      let m2 = await multiplicacion(-2, 3); // Debe rechazar con "La calculadora sólo puede devolver valores positivos"
      console.log(m2);
      let d1 = await division(6, 3); // Debe resolver con 2
      console.log(d1);
      let d2 = await division(6, 0); // Debe rechazar con "Operación inválida"
      console.log(d2);
    } catch (error) {
      // Manejar el error mostrándolo por consola
      console.error(error);
    }
  }
  
  // Llamar a la función calculos para ejecutar las pruebas
  calculos();
  