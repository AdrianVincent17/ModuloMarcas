function Generar(){
    

    var numeros=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    conta=0;
    document.getElementById("generados").innerHTML="Numeros generados:  ";
    document.getElementById("pares").innerHTML="Numeros pares encontrados: ";
    var ale;
    for(let i=0; i<11; i++){
        ale=Math.floor(Math.random()*19+1);
        
        document.getElementById("generados").innerHTML+=+numeros[ale]+", ";

        if(numeros[ale]%2==0){
            document.getElementById("pares").innerHTML+=numeros[ale]+", ";
            conta++;
        }
    }

    document.getElementById("numpares").innerHTML="total de pares: "+conta;
}