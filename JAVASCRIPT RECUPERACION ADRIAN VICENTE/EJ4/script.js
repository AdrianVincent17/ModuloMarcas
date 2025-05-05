
var conta=0;
document.getElementById("demo").innerHTML=conta;

function aumentar(){

    conta++;
    document.getElementById("demo").innerHTML=conta;
    if(conta==10){
        document.body.style.backgroundColor="green";
    }

}

function disminuir(){
    conta--;
    document.getElementById("demo").innerHTML=conta;
    if(conta==-5){
        document.body.style.backgroundColor="red";
    }
}

function reiniciar(){
    document.body.style.backgroundColor="white";
    conta=0;
    document.getElementById("demo").innerHTML=conta;

}