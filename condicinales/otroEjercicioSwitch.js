// Ejercicio 3 switch
// Escribe un programa que use un switch para determinar el tipo de animal vamos a ver que pasa si sigo escribiendo y llego hasta aqui
// según el sonido que hace. Por ejemplo, "guau" es un perro,
// "miau" es un gato, etc.
// Agrega al menos 4 casos diferentes y un caso por defecto.
let sonidoAnimal = "eh ";

switch (sonidoAnimal) {
    case "guau":
        console.log("Eres un perro");
        break;
    case "miau":
        console.log("Eres un gato");
        break;
    case "brumm":
        console.log("Eres una abejita");
        break;
    case "pio pio":
        console.log("Eres un pollito");
        break;
    default:
        console.log("No eres ningún animal, eres una persona 'Cretino' ");
}
