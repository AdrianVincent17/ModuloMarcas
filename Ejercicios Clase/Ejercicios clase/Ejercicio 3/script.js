function CambiarColor(){
    var arrayColoresAntonio=["yellow", "green", "red", "black", "brown", "grey", "orange", "blue", "purple", "white"];
    var x = Math.floor((Math.random() * 10) + 0);
    document.body.style.backgroundColor=arrayColoresAntonio[x];
}