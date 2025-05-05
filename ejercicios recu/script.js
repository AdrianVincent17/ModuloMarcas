function Voltear(){
    var palabrita=document.getElementById("palabra").value;


    document.getElementById("demo").innerHTML=palabrita.split("").reverse().join("");
}