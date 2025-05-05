function Calcular(){
    var valor=parseInt(document.getElementById("Num").value);

    if(valor%2==0){
        document.getElementById("demo").innerHTML="El valor "+valor+" es Par";
        alert("El valor "+valor+" es Par");
    }else{
        document.getElementById("demo").innerHTML="El valor "+valor+" es Impar";
        alert("El valor "+valor+" es Impar");
    }
        
}