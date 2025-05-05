/*
Ejercicio: Solicitar al usuario realizar una operación aritmética
El programa debe preguntar al usuario si desea realizar una operación aritmética. Si la respuesta 
es "no", el programa finaliza. Si la respuesta es "sí", se le solicitarán dos números al usuario y 
el programa mostrará el resultado de su suma.

*/

var result=confirm("¿Quieres hacer una operación aritmética?");
console.log("El resultado del confirm es-->"+result);
if (result==true){
    var a=parseInt(prompt("Introduce el primer número"));
    var b=parseInt(prompt("Introduce el segundo número"));
    var suma= a+b;
    alert("La suma de "+a+" y "+b+" es igual a "+suma);
    document.getElementById("demo").innerHTML=("La suma de "+a+" y "+b+" es igual a "+suma);
}
else{
    alert("Ha elegido que no quiere realizar ninguna operación.");
}