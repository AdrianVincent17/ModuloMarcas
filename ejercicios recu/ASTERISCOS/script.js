function generar(){
    
    document.getElementById("demo").innerHTML="";
    var ale=Math.floor(Math.random()*9+1);

    for(var i=1; i<=ale; i++){
        document.getElementById("demo").innerHTML+="* ";
    }

    document.getElementById("demo2").innerHTML="En total se han generado "+ale+" asteriscos";
}