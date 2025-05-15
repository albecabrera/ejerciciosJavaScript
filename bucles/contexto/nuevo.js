// Crear plantillas 
let auto1 = {
    modelo: 'Modelo 3',
    año: 2021,
    marca: 'Tesla',
    };

let auto2 = {
    modelo: 'Hummer EV',
    año: 2022,
    marca: 'GMC',
};

function Auto(modelo, marca, año) {
    this.modelo = modelo;
    this.marca = marca;
    this.año = año;
    }

console.log(new Auto('Modelo 3', 'Tesla', 2021));
console.log(new Auto('Hummer EV', 'GMC', 2022));
