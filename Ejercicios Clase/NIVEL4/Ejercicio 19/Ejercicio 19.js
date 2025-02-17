var ale =Math.floor(Math.random()*10+1);
console.log(ale)
var maxIntentos=3;


function Adivinar(){

    if(maxIntentos>0){

        maxIntentos --;
        var num=parseInt(document.getElementById("num").value);

        if(num>ale){
            document.getElementById("demo").innerHTML="El numero a adivinar es menor";
        }
        else if(num<ale){
            document.getElementById("demo").innerHTML="El numero a adivinar es mayor";
        }else{
            document.getElementById("demo").innerHTML="Enhorabuena adivinaste el numero "+ale;
            document.getElementById("botoncito").disabled=true;
        }

    }else{
        alert("INSERT COIN");
        document.getElementById("demo").innerHTML="La has liado parda "+ale;
    }
        

   

}