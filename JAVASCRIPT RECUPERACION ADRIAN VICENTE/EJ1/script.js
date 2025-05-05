
function mostrar(){

    document.getElementById("demo").innerHTML="";
    var altura=parseInt(document.getElementById("altura").value);
    
    for(let i=0; i<altura; i++){

        for(let j=altura; j-i; j--){

            document.getElementById("demo").innerHTML+="*";
        }
        document.getElementById("demo").innerHTML+="<br>";
    }

}