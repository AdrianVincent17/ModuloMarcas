
var arrayImg=["N1.png","N2.png","N3.png","N4.png","N5.png","N6.png","N7.png","NS.png","NP.png","NZ.png",
            "A1.png","A2.png","A3.png","A4.png","A5.png","A6.png","A7.png","AS.png","AP.png","AZ.png",
            "L1.png","L2.png","L3.png","L4.png","L5.png","L6.png","L7.png","LS.png","LP.png","LZ.png",
            "V1.png","V2.png","V3.png","V4.png","V5.png","V6.png","V7.png","VS.png","VP.png","VZ.png"];
var arrayValor=[1,2,3,4,5,6,7,0.5,0.5,0.5,1,2,3,4,5,6,7,0.5,0.5,0.5,1,2,3,4,5,6,7,0.5,0.5,0.5,1,2,3,4,5,6,7,0.5,0.5,0.5];
var resultadito=0;


function puedoSeguir(){

    if(resultadito>7.5){
        document.getElementById("pedidito").disabled=true;
        document.body.style.backgroundColor="RED";
    }
    
}


function pedir(){

    var ale =Math.floor(Math.random()*arrayImg.length);
    var ruta="img/"+arrayImg[ale];
    resultadito=parseFloat(arrayValor[ale])+resultadito;
    arrayImg.splice(ale,1);
    arrayValor.splice(ale,1);
    document.getElementById("demo").innerHTML+="<img src="+ruta+" width='200px'>";
    document.getElementById("result").innerHTML="Usted lleva: "+resultadito;
    puedoSeguir();
}

