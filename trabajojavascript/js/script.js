//arrays de imagenes y valores que se asociaran mas adelante para que cada carta tenga un valor asignado

var arrayImg=["N1.png","N2.png","N3.png","N4.png","N5.png","N6.png","N7.png","NS.png","NP.png","NZ.png",
            "A1.png","A2.png","A3.png","A4.png","A5.png","A6.png","A7.png","AS.png","AP.png","AZ.png",
            "L1.png","L2.png","L3.png","L4.png","L5.png","L6.png","L7.png","LS.png","LP.png","LZ.png",
            "V1.png","V2.png","V3.png","V4.png","V5.png","V6.png","V7.png","VS.png","VP.png","VZ.png"];
var arrayValor=[1,2,3,4,5,6,7,0.5,0.5,0.5,1,2,3,4,5,6,7,0.5,0.5,0.5,1,2,3,4,5,6,7,0.5,0.5,0.5,1,2,3,4,5,6,7,0.5,0.5,0.5];

var resultUsuario=0;  //variable que contiene como contador el resultado del usuario
var resultMaquina=0;  //variable que contiene como contador el resultado de la maquina

function puedoSeguir()
{
    //añadimos un concidional que cuando el usuario supere la puntuacion maxima
    //automaticamente se termine el juego y deshabilite ambos botones y cambie el fondo a rojo
    if(resultUsuario>7.5){
        document.getElementById("pedidico").disabled=true;
        document.getElementById("plantadico").disabled=true;
        finDelJuego();
    }

    //Añadimos un condicional para cuando el usuario obtenga la maxima puntuacion
    // desahilitara igual que antes ambos botones y pone el fondo en naranja
    // tambien cambia el fondo a naranja a la espera de que hara la maquina 

    if(resultUsuario==7.5){
        document.getElementById("pedidico").disabled=true;
        document.getElementById("plantadico").disabled=true;
        turnoMaquina();
    }  
}

function pedir()
{

    //en esta linea la variable coge un valor aleatorio de entre 0 y el total de la baraja osea 40
    var ale =Math.floor(Math.random()*arrayImg.length);

    //se guarda en una variable la ruta a la que pertenece la imagen en el valor que haya salido aleatorio 
    //que correspondera a la posicion del array
    var ruta="img/"+arrayImg[ale];

    //en el resultado como variable se guarda el valor del numero aleatorio 
    //que corresponda con la posicion del array
    resultUsuario=parseFloat(arrayValor[ale])+resultUsuario;

    //ambas punciones sirven para quitar un valor o una imagen de ambos arrays
    arrayImg.splice(ale,1);
    arrayValor.splice(ale,1);

    //en esta linea cogemos y añadimos la imagen de la carta que haya salido en el div establecido en el html
    document.getElementById("cartastapete").innerHTML+="<img src="+ruta+" width='150px'>";

    //y lo mismo hacemos con la linea de html que mostrara el resultado
    document.getElementById("resultusuarito").innerHTML="PUNTUACION USUARIO: "+resultUsuario;

    //y aqui hace llamada a la funcion definida anteriormente para ver si puede o no puede seguir
    puedoSeguir();
}

function plantarse() 
{
    //cuando decides plantarse ambos botones se deshabilitaran y daran paso al turno de la maquina
    document.getElementById("pedidico").disabled = true;
    document.getElementById("plantadico").disabled = true;
    turnoMaquina();
   
}

function turnoMaquina() 
{
    //esta linea es para limpiar el tapete el cual ponemos tanto las cartas del usuario como las de la maquina
    document.getElementById("cartastapete").innerHTML="";

    //creamos un bucle el cual la maquina siga sacando carta mientras esas condiciones se cumplan
    while (resultMaquina < 7  && resultMaquina <= resultUsuario) {
        var ale = Math.floor(Math.random() * arrayImg.length);
        var ruta="img/"+arrayImg[ale];
        resultMaquina=parseFloat(arrayValor[ale])+resultMaquina;

        // Eliminar la carta usada del array
        arrayImg.splice(ale,1);
        arrayValor.splice(ale,1);

        //en esta linea cogemos y añadimos la imagen de la carta que haya salido en el div establecido en el html
        document.getElementById("cartastapete").innerHTML+="<img src="+ruta+" width='150px'>";
    }
    
    //y lo mismo hacemos con la linea de html que mostrara el resultado
    document.getElementById("resultmaquinita").innerHTML = "PUNTUACION MAQUINA: " + resultMaquina;
    //por ultimo verificamos si resulta ganador la maquina o el usuario
    finDelJuego();
}

function botonreset(){

    resultUsuario = 0;  //variable que contiene como contador el resultado del usuario
    resultMaquina = 0;  //variable que contiene como contador el resultado de la maquina
    document.getElementById("resultusuarito").innerHTML = "";
    document.getElementById("resultmaquinita").innerHTML = "";
    document.getElementById("mensaje").innerHTML = "";
    document.getElementById("cartastapete").innerHTML="";
    document.getElementById("pedidico").disabled = false;
    document.getElementById("plantadico").disabled=false;
    var audioPierdes = document.getElementById("pierdes");
    audioPierdes.pause();
    audioPierdes.currentTime=0;
    var audioGanas = document.getElementById("ganas");
    audioGanas.pause();
    audioGanas.currentTime=0;

    var arrayImg=["N1.png","N2.png","N3.png","N4.png","N5.png","N6.png","N7.png","NS.png","NP.png","NZ.png",
        "A1.png","A2.png","A3.png","A4.png","A5.png","A6.png","A7.png","AS.png","AP.png","AZ.png",
        "L1.png","L2.png","L3.png","L4.png","L5.png","L6.png","L7.png","LS.png","LP.png","LZ.png",
        "V1.png","V2.png","V3.png","V4.png","V5.png","V6.png","V7.png","VS.png","VP.png","VZ.png"];
    var arrayValor=[1,2,3,4,5,6,7,0.5,0.5,0.5,1,2,3,4,5,6,7,0.5,0.5,0.5,1,2,3,4,5,6,7,0.5,0.5,0.5,1,2,3,4,5,6,7,0.5,0.5,0.5];

}


function finDelJuego() {
    
    var mensaje = "";
    //creamos condicionales que verifiquen la puntuacion del usuario y
    //en el primero vemos que si es superior te pasas y pierdes automaticamente
    if (resultUsuario > 7.5) {
        mensaje = "¡Te has pasado! has perdido.";

          // Para reproducir la musica creamos una variable de audio para cuando pierdes
          var audioPierdes = document.getElementById("pierdes");
          audioPierdes.play();

    //en este el usuario resultaria vencedor 
    } else if (resultMaquina > 7.5 ) {
        mensaje = "¡Has ganado ehhorabuena!";
        var audioGanas = document.getElementById("ganas");
        audioGanas.play();
       
    //y en los siguientes la maquina gana en caso de empate o porque tiene mayor puntuacion que el usuario
    } else if (resultUsuario === resultMaquina) {
        mensaje = "Empate. La maquinita te gana.";

        //reproducimos la musica aqui tambien
        var audioPierdes = document.getElementById("pierdes");
        audioPierdes.play();
     
    } else {
        mensaje = "La maquinita te ha ganado.";

        //y aqui tambien reproducimos la musica
        var audioPierdes = document.getElementById("pierdes");
        audioPierdes.play();
        
    }
    //por ultimo mostramos el mensaje correspondiente en el hueco del html para el meensaje
    document.getElementById("mensaje").innerHTML = mensaje;
}

