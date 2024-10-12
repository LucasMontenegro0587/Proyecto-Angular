function iniciarSesion() {
    // Pedir nombre de usuario y contraseña
    const nombreUsuario = prompt("Por favor, ingresá tu nombre de usuario:");
    const contrasenia = prompt("Por favor, ingresá tu contraseña:");

  // Verificamos que los campos no estén vacíos
  if (nombreUsuario && contrasenia) {
      alert(`Sesión iniciada, bienvenido/a ${nombreUsuario}`);
    } else {
      alert("No se pudo iniciar sesión. Por favor, completá los campos solicitados.");
    }
  }   

// Función para cerrar sesión
function cerrarSesion() {
  // Confirmación para cerrar sesión
  const deseaCerrar = confirm("¿Querés cerrar sesión?");
  
  if (deseaCerrar) {
    alert("Sesión cerrada con éxito");
  }
}

// Función para inscribirse a un curso
function inscribirse(curso) {
  // Preguntamos si desea inscribirse al curso
  const deseaInscribirse = confirm(`¿Deseás inscribirte en el curso: ${curso}?`);

  if (deseaInscribirse) {
    alert(`Inscripción exitosa al curso: ${curso}`);
  } else {
    alert(`Se canceló la inscripción al curso: ${curso}`);
  }
}
