function Calcular(){
    
    var num=parseInt(document.getElementById("num").value);
    document.getElementById("tabla").innerHTML="";
    document.getElementById("titulo").innerHTML="Tabla de multiplicar del "+num;

    for(let i=0; i<=10; i++){
        var result=i*num;

        document.getElementById("tabla").innerHTML+=num+" x "+i+" = "+result+"<br>";
    }
}


