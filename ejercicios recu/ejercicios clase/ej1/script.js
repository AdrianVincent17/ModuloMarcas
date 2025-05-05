
var cosa=confirm("quieres operar?");

if(cosa){
    var num1=parseInt(prompt("dime un numero"));
    var num2=parseInt(prompt("Ahora otro numero"));
if(isNaN(num1) || isNaN(num2)){
    alert("debes ingresar al numeros cachopo");
}else{
    var result=num1+num2;
    var mensaje = "La suma entre " + num1 + " y " + num2 + " es " + result;
    alert(mensaje);
    console.log(mensaje);
    document.body.innerHTML="<p>"+mensaje+"</p>";
}
    
}else{
    alert("fin del programa");
}