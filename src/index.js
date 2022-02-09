import validator from './validator.js';

document.getElementById("botonvalidar").addEventListener("click", validarTarjeta);
document.getElementById("iniciar").addEventListener("click", mostrarTarjeta);

function mostrarTarjeta(){
    document.getElementById("div_saludo").style.display = "none";
    document.getElementById("div_tarjeta").style.display = "inline";
}

function validarTarjeta(){
    document.getElementById("div_tarjeta").style.display = "none";
    document.getElementById("div_resultado").style.display = "inline";

    let card = document.getElementById("cardNumber").value;
    let tipoTarjeta = document.querySelector("input[name='card']:checked").value;
    let valid = validator.isValid(card);
    let masked = validator.maskify(card);

    document.getElementById("masked").innerHTML = "Tarjeta " + masked + " verificada."
    if(valid){
        document.getElementById("valida").innerHTML = "Tu tarjeta " + tipoTarjeta + " es válida. ¡Úsala ya!"
    }else{
        document.getElementById("valida").innerHTML = "Tu tarjeta " + tipoTarjeta + " es inválida. Intenta con otra tarjeta."
    }
}
