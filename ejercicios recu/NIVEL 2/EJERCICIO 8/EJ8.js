var edad = parseInt(prompt("¿Cuál es tu edad?"));

if (edad < 18) {
    alert("Acceso denegado");
    document.body.style.backgroundColor = "red";
} else if (edad <= 65) {
    alert("Acceso permitido");
    document.body.style.backgroundColor = "orange";
} else {
    alert("Acceso VIP");
    document.body.style.backgroundColor = "green"; 
}
  
