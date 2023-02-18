function validarSuma() {
    var num1;
    var num2;
    var result;
    var resultUsuario;

    num1 = document.getElementById("txtNum1").value;
    num2 = document.getElementById("txtNum2").value;

    result = parseInt(num1) + parseInt(num2);
    resultUsuario = parseInt(document.getElementById("txtResultado").value);
    if (result == resultUsuario) {
        //alert("Correcto, " + result);
        document.getElementById("txtResultado").style.backgroundColor = "green";
        document.getElementById("1").style.display = "block";
        document.getElementById("2").style.display = "none";
    } else {
        //alert("Incorrecto, " + result);
        document.getElementById("txtResultado").style.backgroundColor = "red";
        document.getElementById("2").style.display = "block";
        document.getElementById("1").style.display = "none";
    }

    //alert("El resultado es: " + result);
}

function generarNumerosAleatorios() {
    document.getElementById("txtNum1").value = parseInt(Math.random() * 100);
    document.getElementById("txtNum2").value = parseInt(Math.random() * 100);
    document.getElementById("txtResultado").style.backgroundColor = "white";
    document.getElementById("txtResultado").value = " ";
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "none";
}

function image() {
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "none";
}