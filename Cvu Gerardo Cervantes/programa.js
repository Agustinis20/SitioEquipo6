document.getElementById('enviarBtn').addEventListener('click', function() {

  var nombre = document.getElementById('nombre').value;
  var email = document.getElementById('email').value;
  var mensaje = document.getElementById('mensaje').value;

 
  
  
  var mensajeRespuesta = document.getElementById('mensajeRespuesta');
  mensajeRespuesta.style.display = 'block';
  mensajeRespuesta.innerHTML = 'Gracias ' + nombre + ', por contactarme. Me estaré comunicando a la brevedad.';
});


document.getElementById('enviarBtn').addEventListener('click', function() {
  alert('¡Formulario enviado con éxito!');
});