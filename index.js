import validator from './validator.js';


document.getElementById("iniciar").addEventListener("click", fullIn);
document.getElementById("botonvalidar").addEventListener("click", validateCard);

function fullIn(){
    document.getElementById("inicio").style.display = "none";
    document.getElementById("numerodetarjeta").style.display = "block";
}

function validateCard (){
    document.getElementById("numerodetarjeta").style.display = "none";
    document.getElementById("resultado").style.display = "block";

    let card = document.getElementById("cardNumber").value;
    let franchise  = document.querySelector("input[name='card']:checked").value;
    let valid = validator.isValid(card);
    let masked = validator.maskify(card);

    document.getElementById("masked").innerHTML = masked
    if(valid){
        document.getElementById("valida").innerHTML = "(✓)   Tu tarjeta " + franchise  + " es válida. ¡Úsala ya!"
    }else{
        document.getElementById("invalida").innerHTML = " (x)   Tu tarjeta " + franchise  + " es inválida. Intenta con otra tarjeta."
    }
}

function volveralinicio(){
    document.getElementById("inicio").style.display = "block";
    document.getElementById("resultado").style.display= "none";
}

function goLinkedin(){
    window.location.href = "https://www.linkedin.com/in/thalia-lisebt-rom%C3%A1n-l%C3%B3pez/";
}

document.getElementById("volver").addEventListener("click",volveralinicio);

document.getElementById("in").addEventListener("click",goLinkedin);
