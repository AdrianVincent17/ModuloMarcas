var numero1=parseInt(prompt("Dime un primer numero"));
var numero2=parseInt(prompt("Dime un segundo numero"));

var operacion=(prompt("Que operacion quires hacer (con simbolos) "));

var operacionRealizar=numero1+operacion+numero2;

var resultado=eval(operacionRealizar);

alert("El resultado de la operacion entre "+numero1+" y "+numero2+" es "+resultado);