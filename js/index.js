function multiplicar() {
    let n1 = parseInt(document.getElementById('txtN1').value)
        
    if (isNaN(n1)) {
        alert('Numero 1 en blanco')
    } else {
        let multiplicar = n1 * 1000;
        document.getElementById('txtResultado1').value = multiplicar
    }

}

function limpiar() {
    document.getElementById('txtN1').value = ''
    document.getElementById('txtResultado1').value = ''
}

function multiplicar2() {
    let n2 = parseInt(document.getElementById('txtN2').value)
        
    if (isNaN(n2)) {
        alert('Numero 1 en blanco')
    } else {
        let multiplicar2 = n2 * 100;
        document.getElementById('txtResultado2').value = multiplicar2
    }

}

function limpiar2() {
    document.getElementById('txtN2').value = ''
    document.getElementById('txtResultado2').value = ''
}

function multiplicar3() {
    let n3 = parseInt(document.getElementById('txtN3').value)
        
    if (isNaN(n3)) {
        alert('Numero 1 en blanco')
    } else {
        let multiplicar3 = n3 * 12;
        document.getElementById('txtResultado3').value = multiplicar3
    }

}

function limpiar3() {
    document.getElementById('txtN3').value = ''
    document.getElementById('txtResultado3').value = ''
}

function multiplicar4() {
    let n4 = parseInt(document.getElementById('txtN4').value)
        
    if (isNaN(n4)) {
        alert('Numero 1 en blanco')
    } else {
        let multiplicar4 = n4 * 36;
        document.getElementById('txtResultado4').value = multiplicar4
    }

}

function limpiar4() {
    document.getElementById('txtN4').value = ''
    document.getElementById('txtResultado4').value = ''
}