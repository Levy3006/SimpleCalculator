function Soma(){
    var v1 = +document.getElementById("valor1").value;
    var v2 = +document.getElementById("valor2").value;
    var result1 = (v1+v2);
    document.getElementById("resposta").innerHTML = result1;
}
function Menos(){
    var v1 = +document.getElementById("valor1").value;
    var v2 = +document.getElementById("valor2").value;
    var result2 = v1-v2;
    document.getElementById("resposta").innerHTML = result2;
}
function Vezes(){
    var v1 = +document.getElementById("valor1").value;
    var v2 = +document.getElementById("valor2").value;
    var result3 = v1*v2;
    document.getElementById("resposta").innerHTML = result3;
}
function Divide(){
    var v1 = +document.getElementById("valor1").value;
    var v2 = +document.getElementById("valor2").value;
    var result4 = v1/v2;
    document.getElementById("resposta").innerHTML = result4;
}
