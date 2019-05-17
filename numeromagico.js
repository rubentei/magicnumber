var magic_number = Math.floor(Math.random() * (100 - 1) + 1);
var n_tries = 0;
var output = "";

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("input", isNumber, false);

function keyDownHandler(e) {
    if (e.keyCode == 13) {
        user_tries = document.getElementById('numeroRespuestas').value;
        document.getElementById('numeroRespuestas').disabled = true;
        document.getElementById('numero').disabled = false;
    }
}

function isNumber() {
    if (document.getElementById('numeroRespuestas').disabled) {
        let aux = document.getElementById('numero').value;
        if (isNaN(aux)) {
            alert("Debes introducir un número");
            document.getElementById('numero').value = "";
        } else {
            if (aux < 1 || aux > 100) {
                alert("El número debe ser entre 1 y 100");
                document.getElementById('numero').value = "";
            }
        }
    } else {
        let aux = document.getElementById('numeroRespuestas').value;
        if (isNaN(aux)) {
            alert("Debes introducir un número");
            document.getElementById('numeroRespuestas').value = "";
        } else {
            if (aux < 1 || aux > 100) {
                alert("El número debe ser entre 1 y 100");
                document.getElementById('numeroRespuestas').value = "";
            }
        }
    }
}

function adivinar() {

    user_tries = document.getElementById('numeroRespuestas').value;
    let user_n = document.getElementById('numero').value;

    if (user_n == magic_number) {
        output += `<span class = "acertado">${user_n} - HAS ACERTADO!<span><br>`;
        reset();
    } else if (user_n < magic_number) {
        output += `<span class = "error">${user_n} - El número que buscas es mayor<span><br>`;
    } else if (user_n > magic_number) {
        output += `<span class = "error">${user_n} - El número que buscas es menor<span><br>`;
    }

    n_tries++;

    if (n_tries == user_tries && user_n != magic_number) {
        output += `<span class = "fin">NO HAS ACERTADO!! El número era el ${magic_number}<span><br>`;
        reset();
    }

    document.getElementById('numero').value = "";
    document.getElementById('respuestas').innerHTML = output;

    return false;
}

function reset() {
    document.getElementById('numeroRespuestas').disabled = true;
    document.getElementById('numero').disabled = true;
}