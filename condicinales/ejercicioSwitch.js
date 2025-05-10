// pon un ejercicio a resolver sin poner la respuesta de switch
// Escribe un programa que reciba un día de la semana (en texto) y devuelva si 
// es un día laboral o un día de descanso.
// Usa una estructura switch para resolverlo.
let dia = "jueves";
function determinarDia(dia) {
    switch (dia.toLowerCase()) {
        case "lunes":
        case "martes":
        case "miércoles":
        case "jueves":
        case "viernes":
            return "Es un día laboral";
        case "sábado":
        case "domingo":
            return "Es un día de descanso";
        default:
            return "Día no válido";
    }
}
console.log(dia === "sábado" || dia === "domingo" ? "Es un día laboral" : "Es un día de descanso");

// Otro ejercicio


// let diaLaboral = 6 
// let diaDescanso

// switch (diaLaboral) {
//     case diaDescanso = 5:
//         console.log("Hoy es día de descanso");
//     break
//     case diaDescanso = 6:
//         console.log("Hoy es día de descanso");
//     default:
//         console.log("Hoy es día laboral");
//         break
// }