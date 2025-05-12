// bucle for
// for (inicialización; condición; incremento) {
//     // Código a ejecutar en cada iteración
// }
// Ejemplo de bucle for
for (let i = 0; i < 9; i++) {
    console.log(i);
}

// Ejemplo de bucle for con un array
let frutas = ["manzana", "banana", "naranja"];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
// Ejemplo de bucle for con un objeto
let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};
for (let propiedad in persona) {
    console.log(propiedad + ": " + persona[propiedad]);
}
// Ejemplo de bucle for con un string
let texto = "Hola";
for (let i = 0; i < texto.length; i++) {
    console.log(texto[i]);
}
// Ejemplo de bucle for con un número
let numero = 12345;
let numeroString = numero.toString();
for (let i = 0; i < numeroString.length; i++) {
    console.log(numeroString[i]);
}
// Ejemplo de bucle for con un array de objetos
let personas = [
    { nombre: "Juan", edad: 30 },
    { nombre: "Ana", edad: 25 },
    { nombre: "Pedro", edad: 35 }
];
for (let i = 0; i < personas.length; i++) {
    console.log(personas[i].nombre + ": " + personas[i].edad);
    console.log(personas[i].nombre + ": " + personas[i].nombre);
}
// Ejemplo de bucle for con un array multidimensional
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j]);
    }
}
// Ejemplo de bucle for con un array de strings
let colores = ["rojo", "verde", "azul"];
for (let i = 0; i < colores.length; i++) {
    console.log(colores[i]);
}
// Ejemplo de bucle for con un array de números
let numeros = [1, 2, 3, 4, 5];
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
// Ejemplo de bucle for con un array de booleanos
let booleanos = [true, false, true];
for (let i = 0; i < booleanos.length; i++) {
    console.log(booleanos[i]);
}
// Ejemplo de bucle for con un array de funciones
let funciones = [
    function() { console.log("Función 1"); },
    function() { console.log("Función 2"); },
    function() { console.log("Función 3"); }
];
for (let i = 0; i < funciones.length; i++) {
    funciones[i]();
}
// Ejemplo de bucle for con un array de fechas
let fechas = [
    new Date(2023, 0, 1),
    new Date(2023, 1, 14),
    new Date(2023, 2, 28)
];
for (let i = 0; i < fechas.length; i++) {
    console.log(fechas[i].toLocaleDateString());
}
// Ejemplo de bucle for con un array de objetos con métodos
let objetosConMetodos = [
    {
        nombre: "Objeto 1",
        metodo: function() { console.log("Método 1"); }
    },
    {
        nombre: "Objeto 2",
        metodo: function() { console.log("Método 2"); }
    },
    {
        nombre: "Objeto 3",
        metodo: function() { console.log("Método 3"); }
    }
];
for (let i = 0; i < objetosConMetodos.length; i++) {
    console.log(objetosConMetodos[i].nombre);
    objetosConMetodos[i].metodo();
}