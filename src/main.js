import Swal from 'sweetalert2/dist/sweetalert2.js';

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
  // Confirmación del cierre de sesión
  const deseaCerrar = confirm("¿Querés cerrar sesión?");
  
  if (deseaCerrar) {
    alert("Sesión cerrada con éxito");
  }
}

// Función para inscribirse a un curso usando SweetAlert
function inscribirse(curso) {
  // Se utiliza el SweetAlert para preguntar al usuario
  Swal.fire({
    title: `¿Deseás inscribirte en el curso: ${curso}?`,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Sí, deseo inscribirme',
    cancelButtonText: 'No, quiero cancelar la inscripción',
  }).then((result) => {
    // Si el usuario confirma, se muestra el mensaje de inscripción exitosa
    if (result.isConfirmed) {
      Swal.fire(
        '¡La inscripción fué exitosa!',
        `Estás inscripto en el curso: ${curso}`,
        'Success'
      );
    } else {
      // Si el usuario cancela, se muestra el mensaje de cancelación
      Swal.fire(
        'Inscripción cancelada',
        `No estás inscripto en el curso: ${curso}`,
        'Error'
      );
    }
  });
}
