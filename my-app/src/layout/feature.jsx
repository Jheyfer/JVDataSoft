export default function feature() {
    return (
        <div className="feature">
            <h2 className="titulo">Características de la empresa</h2>

            <ul className="lista">
                <li className="item">
                    <div className="item1">
                        <div className="circulo">
                            <i class="fa-solid fa-pen"></i>
                        </div>
                        <p><span> Diseño personalizado: </span><br />
                            Adaptado a tu marca y objetivos.</p>
                    </div>
                    <div className="item2">
                        <div className="circulo">
                            <i class="fa-regular fa-clock"></i>
                        </div>
                        <p><span> Velocidad y optimización: </span><br />
                            Carga rápida y SEO para más tráfico.</p>
                    </div>
                </li>

                <li className="item">
                    <div className="item1">
                        <div className="circulo">
                            <i class="fa-solid fa-gear"></i>
                        </div>
                        <p><span>Seguridad y estabilidad: </span><br />
                            Protección contra ataques y caídas. <br /></p>
                    </div>
                    <div className="item2">
                        <div className="circulo">
                            <i class="fa-solid fa-wrench"></i>
                        </div>
                        <p><span>Funcionalidades a medida: </span><br />
                            Tiendas online, reservas, blogs y más.</p>
                    </div>
                </li>

                <li className="item">
                    <div className="item1">
                        <div className="circulo">
                            <i class="fa-solid fa-mobile"></i>
                        </div>
                        <p><span>100% Responsivo: </span><br />
                            Se ve perfecto en computadoras y móviles.</p>
                    </div>
                    <div className="item2">
                        <div className="circulo">
                            <i class="fa-solid fa-calendar"></i>
                        </div>
                        <p>¡Lanza tu sitio en días, no en meses!</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}