function Generar(){
    document.getElementById("demo").innerHTML="";
    document.body.style.backgroundColor="white";
    var numeritos=[1,2,3,4,5,6,7,8,9,0];
    var letritas=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y","x","z",];
    var ale;
    
    for (var i=0; i<2; i++){
        ale=Math.floor(Math.random()*numeritos.length);
        document.getElementById("demo").innerHTML+=numeritos[ale];
        if(i == 0 && numeritos[ale] == 2){
            document.body.style.backgroundColor="orange";
        }
    }

    for(var i=0; i<4; i++){
        ale=Math.floor(Math.random()*letritas.length);
        document.getElementById("demo").innerHTML+=letritas[ale];
        if(i==3 && letritas[ale]=="j"){
            document.body.style.backgroundColor="yellow";
        }
    }

    for(var i=0; i<2; i++){
        ale=Math.floor(Math.random()*numeritos.length);
        document.getElementById("demo").innerHTML+=numeritos[ale];
        if(i==1 && numeritos[ale]==3){
            document.body.style.backgroundColor="green";
        }
    }

   
}