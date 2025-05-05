var numeritos=[1,2,3,4,5,6,7,8,9,0];
var letritas=["a","b","c","d","e","f","g","h","i","j","k","m","n","l","ñ","o","p","q","r","s","r","t","u","v","w","x","y","z"];


function Generar(){
    document.getElementById("demo").innerHTML="";
    document.body.style.backgroundColor="white";
    for(let i=0; i<4; i++){
        var ale=Math.floor(Math.random()*numeritos.length);
        document.getElementById("demo").innerHTML+=numeritos[ale];
        if(i==0 && numeritos[ale]==5){
            document.body.style.backgroundColor="orange";
        }
    }

    for(let i=0; i<4; i++){
        var ale=Math.floor(Math.random()*letritas.length);
        document.getElementById("demo").innerHTML+=letritas[ale];
    }



}


