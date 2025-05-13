// mejor utilizarlo para objetos

let macbook = {
    cpu: 'viel',
    gpu: 'sehr',
    graphik: 'stark'
};

for  (let laptop in macbook) {
    console.log(laptop);
}

// for in
// for in es un bucle que se utiliza para iterar sobre las propiedades de un objeto.
// A diferencia del bucle for tradicional, for in no requiere un índice y es más fácil de leer y escribir.
// for in se utiliza comúnmente para recorrer objetos, pero también se puede utilizar con arrays.
// Sin embargo, no se recomienda utilizar for in para recorrer arrays, ya que puede dar resultados inesperados si el array tiene propiedades adicionales.
//
// Ejemplo de bucle for in con un objeto
let persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid'
};
for (let propiedad in persona) {
    console.log(propiedad + ': ' + persona[propiedad]);
}

// Imprimir los números pares hasta el 10, imprimiendo al menos uno.
numerosPares = [2, 4, 6, 8, 10];
for (let i = 0; i < numerosPares.length; i++) {
    if (numerosPares[i] % 2 === 0) {
        console.log(numerosPares[i]);
    }
}
