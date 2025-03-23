export default function Hero() {
    return (
        <div className="hero">
            <img src="../../../src/assets/walling-XLqiL-rz4V8-unsplash.jpg" alt="Fondo" className="hero__bg"/>
            <div className="hero__overlay"></div> 

            <div className="hero__content">
                <h1 className='titulo'>Tu sitio web listo para despegar</h1>
                <p className='texto'>
                    En JVData<span className='soft'>Soft</span>, diseñamos sitios profesionales, rápidos y optimizados.
                </p>
                <button className="boton">
                    <a href="#contacto" className='botontx'>¡Contáctanos!</a>
                </button>
            </div>
        </div>
    )
}
