// for while 
let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}

let lista = [3,5,6,7,8,2,33,80,65,2,4,5]

let numero = 0;
while (numero < 30) {
    numero = lista.shift();
    console.log(numero);
}
console.log(lista);