function Mostrar(){

    var numero=parseInt(document.getElementById("num").value);

    switch(numero){
        case 1: document.getElementById("demo").innerHTML="Lunes";break;
        case 2: document.getElementById("demo").innerHTML="Martes";break;
        case 3: document.getElementById("demo").innerHTML="Miercoles";break;
        case 4: document.getElementById("demo").innerHTML="Jueves";break;
        case 5: document.getElementById("demo").innerHTML="Viernes";break;
        case 6: document.getElementById("demo").innerHTML="Sabado";break;
        case 7: document.getElementById("demo").innerHTML="Domingo";break;
        default: document.getElementById("demo").innerHTML="Esto no correspone a ningun dia de la semana";break;
    }
}