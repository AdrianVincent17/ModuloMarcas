function CalcualrTabla(){

    var num=document.getElementById("numerito").value;
    var result=0;

    document.getElementById("demo").innerHTML="LA TABLA DE MULTIPLICAR DE "+num+"<br>";

    for(let i=0; i<=10; i++){
        result=i*num;
        document.getElementById("demo").innerHTML+=i+" x "+num+" = "+result+"<br>";

    }



}