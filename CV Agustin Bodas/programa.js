// Definición de preguntas del juego y sus respectivas respuestas
const preguntas = [
    {
      pregunta: "¿Dentro de qué etiqueta HTML ponemos JavaScript?",
      opciones: ["body", "style", "script", "footer"],
      respuestaCorrecta: "script"
    },
    {
      pregunta: "¿Cuál de las siguientes opciones es un evento?",
      opciones: ["innerHTML", "getElementById", "alert", "onclick"],
      respuestaCorrecta: "onclick"
    },
    {
      pregunta: "¿Qué interacción espera a que el usuario presione aceptar?",
      opciones: ["alert", "prompt", "confirm"],
      respuestaCorrecta: "alert"
    }
  ];
  
  let preguntaActivaIndex = 0;
  let respuestasCorrectas = 0;
  
  // Función para empezar el juego
  function empezarJuego() {
    mostrarPregunta();
  }
  
  // Función que muestra la pregunta activa
  function mostrarPregunta() {
    const preguntaActiva = preguntas[preguntaActivaIndex];
    document.getElementById("pregunta").innerHTML = preguntaActiva.pregunta;
  
    const opcionesContenedor = document.getElementById("opciones");
    opcionesContenedor.innerHTML = "";
  
    preguntaActiva.opciones.forEach((option, index) => {
      const elementoOpcion = document.createElement("div");
      elementoOpcion.className = "option";
      elementoOpcion.innerHTML = option;
      elementoOpcion.onclick = () => checkearRespuesta(index);
      opcionesContenedor.appendChild(elementoOpcion);
    });
  }
  
  // Función que checkea la respuesta elegida
  function checkearRespuesta(indiceSeleccionado) {
    const preguntaActiva = preguntas[preguntaActivaIndex];
  
    if (preguntaActiva.opciones[indiceSeleccionado] === preguntaActiva.respuestaCorrecta) {
      alert("Correcto!");
      respuestasCorrectas++;
    } else {
      alert("Incorrecto. La respuesta correcta es: " + preguntaActiva.respuestaCorrecta);
    }
  
    // Siguiente pregunta
    preguntaActivaIndex++;
    if (preguntaActivaIndex < preguntas.length) {
      mostrarPregunta();
    } else {
      terminarJuego();
    }
  }

// Función para terminar el juego
function terminarJuego() {
    if (respuestasCorrectas === preguntas.length) {
      alert("Felicitaciones! Haz respondido todas la respuestas correctamente!");
    } else {
      alert("Juego terminado. Completaste las preguntas con " + respuestasCorrectas + " respuestas correctas.");
    }
  }
  
  // Empezar el juego
  empezarJuego();
  