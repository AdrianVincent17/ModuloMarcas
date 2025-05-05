var edad=parseInt(prompt("¿Que edad tienes?"));

if(edad<18){
    alert("Acceso Denegado");

}else if(edad<=65){
    alert("Acceso Permitido");
}else{
    alert("Acceso VIP");
}