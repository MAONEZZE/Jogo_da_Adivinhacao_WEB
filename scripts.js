let numAleatorio = Math.floor(Math.random() * 21);
let btnClicado = document.getElementById("btnEnviar");
let campo2 = document.getElementById("campo2");

btnClicado.addEventListener("click", function() {
    let campoTexto = document.getElementById("campoTexto");
    let numChutado = campoTexto.value;

    if(numChutado == numAleatorio){
        campo2.style.backgroundColor = "green";
        campo2.value = "Parabens você acertou!";
    }
    else if(numChutado > numAleatorio){
        campo2.style.backgroundColor = "blue";
        campo2.value = "O número chutado é MAIOR do que o gerado";
    }
    else if(numChutado < numAleatorio){
        campo2.style.backgroundColor = "red";
        campo2.value = "O número chutado é MENOR do que o gerado";
    }

    campoTexto.value = " ";
});


