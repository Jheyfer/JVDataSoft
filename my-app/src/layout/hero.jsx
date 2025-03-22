import backgroundImage from '../assets/walling-XLqiL-rz4V8-unsplash.jpg';

export default function Hero() {
    return (
        <div  className="hero">
            <div className="hero__content">
                <h1 className='titulo'>Tu sitio web listo para despegar</h1>

                <p className='texto'>
                    En JVDataSoft , diseñamos sitios
                    profesionales, rápidos
                    y optimizados.
                </p>

                <a href="#contacto" className="btn">¡Contáctanos!</a>
            </div>
        </div>
    )
}