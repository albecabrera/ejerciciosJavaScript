// Las clases
class Auto {
    constructor(marca, modelo, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
    }

    // Método para mostrar información del auto
    info() {
        return this.modelo + " - " + this.marca + " - " + this.color;        
    }
}

// Crear una instancia de la clase Auto
const miAuto = new Auto("Toyota", "Corolla", "Rojo");

// Mostrar la información en la consola
console.log(miAuto.info());