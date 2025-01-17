/*Programa que nos pide dos numeros por pantalla y que nos diga cual es el mayor, el menor o si son iguales*/ 

var numero1= parseInt(prompt('Introduce el primero numero, 0'));
var numero2 = parseInt(prompt('Introduce el segundo numero, 0'));

console.log(numero1, numero2);

if(numero1==numero2){
    alert("Los dos numeros son iguales");
}

if(numero1>numero2){
    alert("El numero mayor es: "+numero1);
    alert("El menor numero es: "+numero2);
}else if(numero2>numero1){
    alert("El numero mayor es: "+numero2);
    alert("El menor numero es: "+numero1);
}