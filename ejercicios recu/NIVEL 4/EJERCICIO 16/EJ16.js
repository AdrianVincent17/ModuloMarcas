function generar(){

    var numeritos=[1,2,3,4,5,6,7,8,9,0];
    var letras=["a","b","c","d","e","f","g","h","i","j","k","m","n","l","o","p","q","r","s","t","v","w","x","y","z"];

    var ale;
    document.getElementById("demo").innerHTML="";

    //4 numeros aleatorios
    for(var i=0; i<4; i++){
        ale=Math.floor(Math.random()*letras.length);
        document.getElementById("demo").innerHTML+=letras[ale];
    }

     //4 letras aleatorios
     for(var i=0; i<4; i++){
        ale=Math.floor(Math.random()*numeritos.length);
        document.getElementById("demo").innerHTML+=numeritos[ale];
    }
}