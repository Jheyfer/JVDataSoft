import backgroundImage from '../assets/walling-XLqiL-rz4V8-unsplash.jpg';

export default function Hero() {
    return (
        <div className="hero">
            <img src={backgroundImage} alt="Background" className='imgFondo' />
            <div className="hero__content">
                <h1>Tu sitio web listo para despegar</h1>
                <p>En JVDataSoft , diseñamos sitios
                    profesionales, rápidos
                    y optimizados.</p>
                <a href="#contacto" className="btn">Contáctanos</a>
            </div>
        </div>
    )
}