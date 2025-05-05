var coloritos=["yellow","red","orange","green","purple","blue"];


function colorea(){
    var ale=Math.floor(Math.random()*coloritos.length);
   
    document.body.style.backgroundColor=coloritos[ale];
    alert("El fondo cambiara a color "+coloritos[ale]);
    

}


