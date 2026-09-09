class NavbarAdmin extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-dark navbar-ambromusic">
                <div class="container">

                    <!-- Logo -->
                    <a class="navbar-brand" href="index.html">
                        <img 
                            src="../img/logo_barra_inicio.png" 
                            alt="AmbroMusic" 
                            class="logo-ambromusic">
                    </a>

                    <!-- Botón móvil -->
                    <button 
                        class="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarAdmin"
                        aria-controls="navbarAdmin"
                        aria-expanded="false"
                        aria-label="Mostrar navegación">

                        <span class="navbar-toggler-icon"></span>

                    </button>

                    <div class="collapse navbar-collapse" id="navbarAdmin">

                        <!-- Buscador -->
                        <form class="d-flex mx-lg-4 my-3 my-lg-0 flex-grow-1" role="search">

                            <input 
                                class="form-control me-2" 
                                type="search" 
                                placeholder="Buscar equipos de música..."
                                aria-label="Buscar">

                            <button class="btn btn-ambromusic" type="submit">
                                Buscar
                            </button>

                        </form>

                        <!-- Navegación -->
                        <ul class="navbar-nav ms-auto align-items-lg-center">

                            <li class="nav-item">
                                <a class="nav-link active" href="index.html">
                                    Inicio
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Categorías
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="../productos.html">
                                    Productos
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Ofertas
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Contacto
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    🛒 Carrito
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="btn btn-ambromusic ms-lg-2 mt-2 mt-lg-0"
                                    href="../index.html">
                                    Cerrar sesión
                                </a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        `;
    }
}

customElements.define('custom-indice-admin', NavbarAdmin);