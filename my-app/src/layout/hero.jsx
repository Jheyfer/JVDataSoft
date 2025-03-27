export default function Hero() {
    return (
        <div className="hero">
            <img src="build/img/walling-XLqiL-rz4V8-unsplash.jpg" alt="Fondo" className="hero__bg" />
            <div className="hero__overlay"></div>

            <div className="hero__content">
                <h2 className='titulo'>Tu sitio web listo para despegar</h2>
                <p className='texto'>
                    En JVData<span className='soft'>Soft</span>, diseñamos sitios profesionales, rápidos y optimizados.
                </p>
                <div id="about"></div>
                <button className="boton">
                    <a href="#contact" className='botontx'>¡Contáctanos!</a>
                </button>
            </div>
        </div>
    )
}
