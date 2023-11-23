function submitForm() {
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var mensaje = document.getElementById('mensaje').value;
    var output = document.getElementById('output');
    var errorDiv = document.getElementById('error');

    // Chequear si el nombre o mensaje esta vacio
    if (nombre.trim() === '' || mensaje.trim() === '') {
        errorDiv.innerHTML = 'Por favor complete todos los campos';
        output.innerHTML = '';
    } else if (!isValidEmail(correo)) {
        errorDiv.innerHTML = 'Por favor ingrese una dirección de correo válida';
        output.innerHTML = ''; 
    } else {
        errorDiv.innerHTML = ''; 
        output.innerHTML = '<p>Muchas gracias por tu cooperación ' + nombre + '!</p>';
    }
}

// Función para validar correo
function isValidEmail(email) {
    var emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
}

nombre.setAttribute("style", "background-color: #73877B; font-family: 'Abel', sans-serif;")
correo.setAttribute("style", "background-color: #73877B; font-family: 'Abel', sans-serif;")
mensaje.setAttribute("style", "background-color: #73877B; font-family: 'Abel', sans-serif;")
