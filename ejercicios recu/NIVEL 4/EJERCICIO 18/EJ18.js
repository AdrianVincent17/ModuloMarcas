function Calcular(){
    var numerito=document.getElementById("numero").value;
    var result=0;
    document.getElementById("demo").innerHTML="Tabla de multiplicar del "+numerito+"<br><br>";
    for(var i=1; i<=10; i++){
        result=numerito*i;
        document.getElementById("demo").innerHTML+=numerito+" x "+i+" = "+result+"<br>";
    }
}