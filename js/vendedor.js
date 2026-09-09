
// Obtenemos el rol guardado al iniciar sesión
const rolUsuario = localStorage.getItem('rol_usuario')

// Verificamos que el usuario sea vendedor
if (rolUsuario !== 'vendedor') {
    // Si no es vendedor, lo devolvemos al inicio de sesión
    window.location.href = '../index.html'
    alert('que paso?')
}

