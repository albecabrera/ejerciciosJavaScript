let auto = {
    modelo: 'Mazda',
    color: 'Rojo',
    año: 2020,
    encender: function() {
     return 'Este es un auto ' + this.modelo + ' de color ' + this.color + ' del año ' + this.año;
}
};
console.log(auto.encender());
console.log(auto.modelo);
console.log(auto.color);
console.log(auto.año);