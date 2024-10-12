// Función para iniciar sesión como Administrador o Alumno
function iniciarSesion() {
  // Pide el nombre de usuario y contraseña
  const nombreUsuario = prompt("Por favor, ingresá tu nombre de usuario:");
  const contrasenia = prompt("Por favor, ingresá tu contraseña:");

  // Verificar el rol y las credenciales
  if (nombreUsuario && contrasenia) {
    if (nombreUsuario === "ADM" && contrasenia === "Pentahouse-ADM") {
      Swal.fire({
        title: 'Sesión iniciada',
        text: 'Bienvenido Administrador/a',
        icon: 'success',
        background: '#1e1e1e', // Modo oscuro
        color: '#ffffff', // Texto en modo oscuro
      });
    } else if (nombreUsuario === "ALM" && contrasenia === "Pentahouse-ALM") {
      Swal.fire({
        title: 'Sesión iniciada',
        text: 'Bienvenido/a Alumno/a',
        icon: 'success',
        background: '#1e1e1e',
        color: '#ffffff',
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Nombre de usuario o contraseña incorrectos',
        icon: 'error',
        background: '#1e1e1e',
        color: '#ffffff',
      });
    }
  } else {
    Swal.fire({
      title: 'Error',
      text: 'Por favor, completá los campos solicitados.',
      icon: 'warning',
      background: '#1e1e1e',
      color: '#ffffff',
    });
  }
}

// Función para cerrar sesión
function cerrarSesion() {
  // Confirmación del cierre de sesión usando SweetAlert en modo oscuro
  Swal.fire({
    title: '¿Querés cerrar sesión?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, cerrar sesión',
    cancelButtonText: 'No',
    background: '#1e1e1e',
    color: '#ffffff',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: 'Sesión cerrada con éxito',
        icon: 'success',
        background: '#1e1e1e',
        color: '#ffffff',
      });
    }
  });
}

// Función para inscribirse a un curso usando SweetAlert en modo oscuro
function inscribirse(curso) {
  // Se utiliza SweetAlert para preguntar al usuario
  Swal.fire({
    title: `¿Deseás inscribirte en el curso: ${curso}?`,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Sí, deseo inscribirme',
    cancelButtonText: 'No, quiero cancelar la inscripción',
    background: '#1e1e1e',
    color: '#ffffff',
  }).then((result) => {
    // Si el usuario confirma, se muestra el mensaje de inscripción exitosa
    if (result.isConfirmed) {
      Swal.fire({
        title: '¡La inscripción fue exitosa!',
        text: `Estás inscripto en el curso: ${curso}`,
        icon: 'success',
        background: '#1e1e1e',
        color: '#ffffff',
      });
    } else {
      // Si el usuario cancela, se muestra el mensaje de cancelación
      Swal.fire({
        title: 'Inscripción cancelada',
        text: `No estás inscripto en el curso: ${curso}`,
        icon: 'error',
        background: '#1e1e1e',
        color: '#ffffff',
      });
    }
  });
}
