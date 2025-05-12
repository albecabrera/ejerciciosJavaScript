//  Refuerza tus conocimientos en condicionales imprimiendo si un usuario es
//  mayor o menor de edad, después que de acuerdo a la acción 
// ingresada "crear, colocar, actualizar y borrar" se imprima que acción 
// se realizará y por ultimo, si un número es par o impar. 🤓

// let usuario = 17;
// if (usuario >= 18) {
//     console.log("Eres mayor de edad");
// } else {
//     console.log("Eres menor de edad");
// }; 

let accionIngresada = "actualizar"; // Cambia este valor para probar diferentes acciones

switch (accionIngresada) {
    case "crear":
        console.log("La acción es crear");
        break;
    case "colocar":
        console.log("La acción es colocar");
        break;
    case "actualizar":
        console.log("La acción es actualizar");
        break;
    case "borrar":
        console.log("La acción es borrar");
        break;
    default:
        console.log("Acción no reconocida");
}
