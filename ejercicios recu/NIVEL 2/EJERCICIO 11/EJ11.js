var ale=Math.floor(Math.random()*10)+1;
console.log(ale);

function Adivinar(){
    var num=document.getElementById("num1").value;

    if(ale>num){
        document.getElementById("demo").innerHTML="El numero a adivinar es mayor";
        document.body.style.backgroundColor="orange";
    }else if(ale<num){
        document.getElementById("demo").innerHTML="El numero a adivinar es menor";
        document.body.style.backgroundColor="orange";
    }else{
        alert("Enhorabuena adivinaste el numero");
        document.getElementById("demo").innerHTML="ACERTASTE!!! el numero era el "+ale;
        document.body.style.backgroundColor="green";
    }

}