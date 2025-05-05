var colores=["yellow","brown","black","white","green","red","orange","purple","blue","grey"];

function Colorea(){

    
    var ale=Math.floor(Math.random()*colores.length);

    document.body.style.backgroundColor=colores[ale];

}