
class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav>
            <input type="text" placeholder="Buscar...">
            <ul class="d-flex list-unstyled gap-3">
                <li>
                    <a href="index.html">Inicio</a>
                </li>
                <li>
                    <a href="#">Categorías</a>
                </li>
                <li>
                    <a href="#">Carrito</a>
                </li>
                <li>
                    <a href="#">Ofertas</a>
                </li>
                <li>
                    <a href="#">Preguntas Frecuentes</a>
                </li>
                <li>
                    <a href="#">Contacto</a>
                </li>
                <li>
                    <a href="inicio-sesion.html">iniciar Sesion</a>
                </li>
            </ul>
        </nav>
        `
    }
}

customElements.define('custom-indice', Navbar)