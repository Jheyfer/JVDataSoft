
export default function Header() {
    return (
        <header id="home">
            <nav className="navbar">
                <div className="imageHeader"></div>
                <h1 className="header-tittle" >Data<b>Soft</b></h1>

                <ul className="nav-links">
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="#about">Sobre Nosotros</a></li>
                    <li><a href="#services">Servicios</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </nav>
        </header>
    )
}