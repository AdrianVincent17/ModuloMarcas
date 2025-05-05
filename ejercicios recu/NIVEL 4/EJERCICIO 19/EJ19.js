var ale=Math.floor(Math.random()*21)+5;
console.log(ale);

var intentos=3;
var conta=0;

function Adivinar() {

    var numerito = parseInt(document.getElementById("num1").value);
    
    if (numerito >= 5 && numerito <= 25) {
        intentos--;
        conta++;
        console.log(intentos);
        // Primero verifica si el número es correcto (sin importar los intentos restantes)
        if (numerito == ale) {
            document.getElementById("demo").innerHTML = "Enhorabuena!! acertaste el numero en "+conta+" intentos";
            document.getElementById("botoncito").disabled = true;
            document.body.style.backgroundColor = "green";
            alert("Enhorabuena el numero era " + ale);
            return; // Sale de la función si es correcto
        }
        
        // Si no es correcto, resta un intento
        

        // Luego verifica si quedan intentos
        if (intentos > 0) {
            if (numerito > ale) {
                document.getElementById("demo").innerHTML = "El numero a adivinar es menor";
                document.body.style.backgroundColor = "orange";
            } else if (numerito < ale) {
                document.getElementById("demo").innerHTML = "El numero a adivinar es mayor";
                document.body.style.backgroundColor = "orange";
            }
        } else {
            alert("OHHH, lo siento te quedaste sin intentos...");
            document.getElementById("demo").innerHTML = "Lo siento, te quedaste sin intentos";
            document.body.style.backgroundColor = "red";
            document.getElementById("botoncito").disabled = true;
        }
    } else {
        alert("El numero esta fuera de rango. Lee bien.");
    }
}
