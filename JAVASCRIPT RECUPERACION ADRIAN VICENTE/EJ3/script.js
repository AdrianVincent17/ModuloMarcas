var numeritos=[1,2,3,4,5,6,7,8,9,0];
var letritasmin=["a","b","c","d","e","f","g","h","i","j","k","m","n","l","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];

var letritasmay=["A","B","C","D","E","F","G","H","I","J","K","M","N","L","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var ale;


function Generar(){

    document.getElementById("demo").innerHTML="Codigo Generado: ";
    document.body.style.backgroundColor="white";
    for(let i=0; i<2; i++){
        ale=Math.floor(Math.random()*letritasmay.length);
        document.getElementById("demo").innerHTML+=letritasmay[ale];
        if(i==0 && letritasmay[ale]=="Z"){
            document.body.style.backgroundColor="blue";
        }
    }

    for(let i=0; i<2; i++){
        ale=Math.floor(Math.random()*numeritos.length);
        document.getElementById("demo").innerHTML+=numeritos[ale];
      
    }

    for(let i=0; i<2; i++){
        ale=Math.floor(Math.random()*letritasmin.length);
        document.getElementById("demo").innerHTML+=letritasmin[ale];
    
    }



}