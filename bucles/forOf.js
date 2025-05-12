// for of
// for of es un bucle que se utiliza para iterar sobre objetos iterables como arrays, strings, maps, sets, etc.
// A diferencia del bucle for tradicional, for of no requiere un índice y es más fácil de leer y escribir.
// for of se utiliza comúnmente para recorrer arrays y strings, pero también se puede utilizar con otros objetos iterables como maps y sets.
//
// Ejemplo de bucle for of con un array de números
let lista = [1,2,3,4,5,6];
for (let element of lista) {
    console.log(element);
}
  

let notasCubanas = [2,3,4,5]
for (let notas of notasCubanas) {
    console.log(notas); // estas son las notas en Cuba en la universidad
}