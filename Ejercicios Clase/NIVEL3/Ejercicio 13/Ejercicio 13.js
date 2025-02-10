
function cambiarcolor(){

    var coloritos=["RED", "GREEN", "ORANGE","GREY", "BROWN", "BLACK", "LIGHT GREEN", "PURPLE", "DARK GREY", "VIOLET"];
    var x=Math.floor(Math.random()*coloritos.length);
    document.body.style.backgroundColor=coloritos[x];
}