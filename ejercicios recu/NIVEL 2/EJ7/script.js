function Calcular(){

    var numerito=parseInt(document.getElementById("numero").value);

    if(numerito%2==0){
        document.getElementById("demo").innerHTML="El numero "+numerito+" es Par";
    }else{
        document.getElementById("demo").innerHTML="El numero "+numerito+" es Impar";
    }

}