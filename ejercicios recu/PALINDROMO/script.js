function Verificar(){
    var palabra=document.getElementById("palabra").value;

    var palabrainvertida=palabra.split("").reverse().join("");

    if(palabra==palabrainvertida){
        document.getElementById("demo").innerHTML+="<li>"+palabra+" ---> es PALINDROMO y tiene "+palabra.length+" caracteres"+"</li>";

    }else{
        document.getElementById("demo").innerHTML+="<li>"+palabra+" tiene "+palabra.length+" caracteres"+"</li>";
    }
}
function limpiar(){
    document.getElementById("demo").innerHTML="";
}