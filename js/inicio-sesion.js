const botonInicioSesion = document.getElementById('btn-inicio-sesion')

botonInicioSesion.addEventListener('click', function () {
    //obtenemos el imput del correo
    const inputEmail = document.getElementById('input-email')
    //obtenemos el input de la contraseña
    const inputPassword = document.getElementById('input-password')
    //obtenemos el correo (el valor del input)
    const email = inputEmail.value

    if (email === 'admin@tienda.cl') {
        //lo redigiremos a admin/index.html
        window.location = 'admin/index.html'

        localStorage.setItem('rol_usuario', 'admin')
    } else if (email === 'vendedor@tienda.cl') {
        //lo redirigimos a vendedor/index.html
        window.location = 'admin/vendedor.html'

        localStorage.setItem('rol_usuario', 'vendedor')
    } else {
        alert('Credenciales incorrectas')
    }

})