function soma(){
    var num1 = document.getElementById("num1").valueAsNumber;
    var num2 = document.getElementById("num2").valueAsNumber;
    var res1 = num1 + num2;
    document.getElementById("resSoma").textContent = res1.toFixed(2);
}

function subtracao(){
    var num3 = document.getElementById("num3").valueAsNumber;
    var num4 = document.getElementById("num4").valueAsNumber;
    var res2 = num3 - num4;
    document.getElementById("resSub").textContent = res2.toFixed(2);
}

function divisao(){
    var num5 = document.getElementById("num5").valueAsNumber;
    var num6 = document.getElementById("num6").valueAsNumber;
    var res3 = num5 / num6;
    document.getElementById("resDiv").textContent = res3.toFixed(2);
}

function Multiplicacao(){
    var num7 = document.getElementById("num7").valueAsNumber;
    var num8 = document.getElementById("num8").valueAsNumber;
    var res4 = num7 * num8;
    document.getElementById("resMult").textContent = res4.toFixed(2);
}

function media(){
    var num9 = document.getElementById("num9").valueAsNumber;
    var num10 = document.getElementById("num10").valueAsNumber;
    var num11 = document.getElementById("num11").valueAsNumber;
    var res5 = ((num9 + num10 + num11) / 3);
    document.getElementById("resMedia").textContent = res5.toFixed(2);
}