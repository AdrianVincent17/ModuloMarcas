
function generarcontraseña(){

   var numeritos=[0,1,2,3,4,5,6,7,8,9];
   var letritas=['A','B','D','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','W','Y','Z','a','b','d','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','w','y','z'];
   var ale;

    document.getElementById("demo").innerHTML="";
   //for que coge 4 letras
    for(let i = 0; i < 4; i++){
        ale=Math.floor(Math.random()*letritas.length);
        document.getElementById("demo").innerHTML+=letritas[ale];
        console.log(letritas[ale]);

    }

    //for que coge 4 numeros
    for (let i = 0; i < 4; i++) {
        ale=Math.floor(Math.random()*numeritos.length);
        document.getElementById("demo").innerHTML+=numeritos[ale];
        console.log(numeritos[ale]);
        
    }


}