document.getElementById('enviarBtn').addEventListener('click', function() {

  var nombre = document.getElementById('nombre').value;
  var email = document.getElementById('email').value;
  var mensaje = document.getElementById('mensaje').value;

 
  
  
  var mensajeRespuesta = document.getElementById('mensajeRespuesta');
  mensajeRespuesta.style.display = 'block';
  mensajeRespuesta.innerHTML = 'Muchas gracias ' + nombre + ',cuando la pala me llame te contacare.';
});


document.getElementById('enviarBtn').addEventListener('click', function() {
  alert('¡Por favor no mandes mas mensajes!');
});