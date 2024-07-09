// Funcion que al presionar el boton despues de seleccionar encriptar o desencriptar
//  envia al textarea salida el resultado encriptado
function proceso() {
    const carga = document.getElementById('ingTexto').value.toLowerCase();
    const option = document.getElementById('option').value;
    let salida = '';

    if (option === 'enc') {
        salida = enc(carga);
    } else if (option === 'dec') {
        salida = dec(carga);
    }

    document.getElementById('salida').value = salida;
}
//Funcion para encriptar y desencriptar el texto 
function enc(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

function dec(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}

//funcion que copia el texto para luego poder hacer el proceso inverso 

function copiarTexto() {
    const salida = document.getElementById('salida').value;

    navigator.clipboard.writeText(salida)
        .then(() => {
            alert('El texto fue copiado con éxito.');
            document.getElementById('ingTexto').value=""
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
            alert('No se pudo copiar el texto al portapapeles.');
        });
}
//funciona que permite pegar el texto de la salida en el ingreso de texto
//para poder realizar una accion  
function pegarTexto() {
    navigator.clipboard.readText()
        .then(text => {
            document.getElementById('ingTexto').value += text;
        })
        .catch(err => {
            console.error('Error al pegar el texto: ', err);
            alert('No se pudo pegar el texto.');
        });
}

