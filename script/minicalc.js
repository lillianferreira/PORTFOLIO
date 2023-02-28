const miniCalc = document.getElementById("miniCalc");

miniCalcBtn.addEventListener("click", function() {
    let n1 = parseFloat(prompt("Entre com o nro 1: "));
    let n2 = parseFloat(prompt("Entre com o nro 2: "));
    let oper = prompt("Escolha entre ('+','-','*','/','**')")
    let res;

    if (oper == "+") {res = n1 + n2;}
    else if (oper == "-") {res = n1 - n2;}
    else if (oper == "*") {res = n1 * n2;}
    else if (oper == "/") {res = n1 / n2;}
    else if (oper == "**") {res = n1 ** n2;}
    alert(res);

    window.open("index.html", "miniCalc");

});



