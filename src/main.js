// Variable para almacenar el estado del usuario logueado
let usuarioLogueado = null;

// Deshabilitar el botón de "Desconectarse" al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  const btnDesconectar = document.getElementById('btnDesconectar');
  if (btnDesconectar) {
    btnDesconectar.disabled = true; // Deshabilitado inicialmente
  }
});

// Función para iniciar sesión como Administrador o Alumno
function iniciarSesion() {
  // Pide el nombre de usuario y contraseña
  const nombreUsuario = prompt("Por favor, ingresá tu nombre de usuario:");
  const contrasenia = prompt("Por favor, ingresá tu contraseña:");

  // Verificar el rol y las credenciales
  if (nombreUsuario && contrasenia) {
    if (nombreUsuario === "ADM" && contrasenia === "Pentahouse-ADM") {
      usuarioLogueado = { nombre: nombreUsuario, rol: 'admin' };
      Swal.fire({
        title: 'Sesión iniciada',
        text: 'Bienvenido Administrador/a',
        icon: 'success',
        background: '#1e1e1e', // Modo oscuro
        color: '#ffffff', // Texto en modo oscuro
      }).then(() => {
        habilitarDesconexion();
        // Redirigir a la página del administrador
        window.location.href = './app/dashboard/dashboard.component.html';
      });
    } else if (nombreUsuario === "ALM" && contrasenia === "Pentahouse-ALM") {
      usuarioLogueado = { nombre: nombreUsuario, rol: 'alumno' };
      Swal.fire({
        title: 'Sesión iniciada',
        text: 'Bienvenido/a Alumno/a',
        icon: 'success',
        background: '#1e1e1e',
        color: '#ffffff',
      }).then(() => {
        habilitarDesconexion();
        // Redirigir a la página del alumno
        window.location.href = 'app.component.html';
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

// Función para habilitar el botón de desconexión
function habilitarDesconexion() {
  const btnDesconectar = document.getElementById('btnDesconectar');
  if (btnDesconectar) {
    btnDesconectar.disabled = false; // Habilitar el botón
  }
}

// Función para cerrar sesión
function finalizarSesion() {
  // Confirmación del cierre de sesión usando SweetAlert en modo oscuro
  Swal.fire({
    title: '¿Querés cerrar sesión?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí',
    cancelButtonText: 'No',
    background: '#1e1e1e',
    color: '#ffffff',
  }).then((result) => {
    if (result.isConfirmed) {
      usuarioLogueado = null; // Limpiar el estado del usuario
      deshabilitarDesconexion();
      Swal.fire({
        title: 'Sesión cerrada con éxito',
        icon: 'success',
        background: '#1e1e1e',
        color: '#ffffff',
      }).then(() => {
        // Redirigir a la página principal o de inicio de sesión
        window.location.href = 'index.html';
      });
    }
  });
}

// Función para deshabilitar el botón de desconexión
function deshabilitarDesconexion() {
  const btnDesconectar = document.getElementById('btnDesconectar');
  if (btnDesconectar) {
    btnDesconectar.disabled = true; // Deshabilitar el botón
  }
}

// Función para inscribirse a un curso usando SweetAlert en modo oscuro
function inscribirse(curso) {
  // Verificar si el usuario está logueado y si su rol es "alumno"
  if (usuarioLogueado && usuarioLogueado.rol === 'alumno') {
    Swal.fire({
      title: `¿Deseás inscribirte en el curso: ${curso}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, deseo anotarme',
      cancelButtonText: 'No, quiero cancelar',
      background: '#1e1e1e',
      color: '#ffffff',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: '¡Excelente!',
          text: `Estás inscripto en el curso: ${curso}`,
          icon: 'success',
          background: '#1e1e1e',
          color: '#ffffff',
        });
      } else {
        Swal.fire({
          title: 'Cancelación completa',
          text: `No te inscribiste en el curso: ${curso}`,
          icon: 'error',
          background: '#1e1e1e',
          color: '#ffffff',
        });
      }
    });
  } else {
    Swal.fire({
      title: 'Acceso Denegado',
      text: 'Iniciá sesión como Alumno/a.',
      icon: 'error',
      background: '#1e1e1e',
      color: '#ffffff',
    });
  }
}
