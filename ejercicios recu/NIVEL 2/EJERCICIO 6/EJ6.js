function Calcular(){
    var numerito1=parseInt(document.getElementById("num1").value);
    var numerito2=parseInt(document.getElementById("num2").value);
    var operador=document.getElementById("operador").value;

    var OperacionARealizar=numerito1+operador+numerito2;
    var result=eval(OperacionARealizar);

    document.getElementById("demo").innerHTML=result;
    alert("El resultado de la operacion es "+result);


}