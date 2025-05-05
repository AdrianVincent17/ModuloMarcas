function calcular(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var operador = document.getElementById("operador").value;

    var operacionarealizar=num1+operador+num2;
    var result=eval(operacionarealizar);
    document.getElementById("Demo").innerHTML=result;
}








