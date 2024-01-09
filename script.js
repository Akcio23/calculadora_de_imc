
function teste() {
    const validacao = document.getElementById("validacao");
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value)/100;
    const imc = (peso / Math.pow(altura, 2)).toFixed(1)


    if (imc < 18.5) {
        validacao.innerHTML = "Seu IMC é "+ imc +" encontra-se na classificação de magreza"
    } else if (imc >= 18.5 && imc <= 24.9) {
        validacao.innerHTML = "Seu IMC é "+ imc +" , encontra-se na classificação normal";
    } else if (imc >= 25.0 && imc <= 29.9) {
        validacao.innerHTML = "Seu IMC é "+ imc +" , encontra-se na classificação de obesidade I";
    } else if (imc >= 30.0 && imc <= 39.9) {
        validacao.innerHTML = "Seu IMC é "+ imc +" , encontra-se na classificação de obesidade II";
    } else if (imc >= 40) {
        validacao.innerHTML = "Seu IMC é maior ou igual a 40, encontra-se na classificação de obesidade grave!";
    } else {
        alert('Digite valores validos!!!')
    }

   

    return false;
}
