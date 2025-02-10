
var ale=Math.floor(Math.random()*10+1);
console.log(ale);

function adivinar(){

    var num1=parseInt(document.getElementById("num").value);
    if(num1>ale){
       document.getElementById("demo").innerHTML="El numero a adivinar es menor ";
       document.body.style.backgroundColor="ORANGE";
    }else if(num1<ale){
        document.getElementById("demo").innerHTML="El numero a adivinar es mayor ";
        document.body.style.backgroundColor="ORANGE";
    }else{
        document.getElementById("demo").innerHTML="Adivinaste el numero "+ale;
        document.body.style.backgroundColor="GREEN";
    }


}