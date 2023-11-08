"use strict";

let num1 = Number(prompt("Ingrese primer Numero: "));

let num2 = Number(prompt("Ingrese segundo Numero: "));

if ((num1 + num2) > 1000){
    alert("El numero es mayor a 1000");

} 
else if ((num1 + num2) < 1000){
    alert("El numero es menor a 1000");
}

else{
    alert("El numero es igual a 1000");
}

let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;


alert("La suma de los numeros es: " + suma);
alert("La resta de los numeros es: " + resta);
alert("La multiplicacion de los numeros es: " + multiplicacion);
alert("La division de los numeros es: " + division);


console.log("La suma de los numeros es: " + suma);
console.log("La resta de los numeros es: " + resta);
console.log("La multiplicacion de los numeros es: " + multiplicacion);
console.log("La division de los numeros es: " + division);

