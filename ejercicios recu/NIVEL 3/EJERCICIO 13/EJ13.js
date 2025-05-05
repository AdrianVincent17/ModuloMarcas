function colorfondo(){
    var coloritos=["yellow","red","orange","green","black","grey","blue","purple","pink","brown","white",];
    var x=Math.floor(Math.random()*coloritos.length);

    document.body.style.backgroundColor=coloritos[x];
}