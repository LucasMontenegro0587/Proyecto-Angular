function iniciarSesion() {
    // Pedir nombre de usuario y contraseña
    const nombreUsuario = prompt("Por favor, ingrese su nombre de usuario:");
    const contrasenia = prompt("Por favor, ingrese su contraseña:");

  // Verificamos que los campos no estén vacíos
  if (nombreUsuario && contrasenia) {
      alert(`Sesión iniciada, bienvenido/a ${nombreUsuario}`);
    } else {
      alert("No se pudo iniciar sesión. Por favor, complete todos los campos.");
    }
  }   
  alert('Se debe implementar mejora!')

// Función para cerrar sesión
function cerrarSesion() {
  // Confirmación para cerrar sesión
  const deseaCerrar = confirm("¿Quiere cerrar sesión?");
  
  if (deseaCerrar) {
    alert("Sesión cerrada con éxito");
  }
}

// Función para inscribirse a un curso
function inscribirse(curso) {
  // Preguntamos si desea inscribirse al curso
  const deseaInscribirse = confirm(`¿Deseas inscribirte en el curso: ${curso}?`);
  
  if (deseaInscribirse) {
    alert(`Te has inscrito en el curso: ${curso}`);
  }
}
