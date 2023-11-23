function submitForm() {
    var domicilio = document.getElementById("domicilio").value;
    var telefono = document.getElementById("telefono").value;
    var selectedOption = document.getElementById("options").value;
    var output = document.getElementById('output');
    var errorDiv = document.getElementById('error');

    if (domicilio.trim() === '') {
        errorDiv.innerHTML = 'Por favor complete todos los campos';
        output.innerHTML = '';
    } else if (!isValidPhone(telefono)) {
        errorDiv.innerHTML = 'Ingrese un número de teléfono de 10 dígitos';
        output.innerHTML = ''; 
    } else {
        errorDiv.innerHTML = ''; 
        output.innerHTML = '¡Apreciamos tu colaboración! ¡Estaremos retirando tus botellas lo más pronto que podamos!';
    }
}

// Validación de número de teléfono
function isValidPhone(telefono) {
    var phoneRegex = /^\d{10}$/;
    return phoneRegex.test(telefono);
}
