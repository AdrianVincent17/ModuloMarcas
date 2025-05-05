var ale=Math.floor(Math.random()*10+1);
console.log(ale);

function Adivinar(){

    var numerito=parseInt(document.getElementById("num").value);

    if(numerito>0 && numerito<=10){
        if(numerito<ale){
            document.getElementById("demo").innerHTML="El valor a adivinar es mayor";
        }else if(numerito>ale){
            document.getElementById("demo").innerHTML="El valor a adivinar es menor";
        }else{
            document.getElementById("demo").innerHTML="Enhorabuena adivinaste el numero ";
            document.getElementById("botoncito").disabled=true;
            document.body.style.backgroundColor="green";
        }
    }else{
        alert("El numero tiene que estar en un rango (1-10)");
    }
    

}


