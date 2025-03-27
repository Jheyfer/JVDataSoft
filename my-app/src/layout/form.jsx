export default function Form() {
    return (
        <div className="contactanos">

            <h2 className="titulo">Contáctanos</h2>

            <form className="caja" action="https://formsubmit.co/jvdatasoft@gmail.com" method="POST" >

                <label htmlFor="name" className="name1">Nombre</label>
                <input
                    type="text"
                    className="name"
                    id="name"
                    name="name"
                    placeholder="Ingrese su nombre"
                />

                <label htmlFor="email" className="email1">Correo</label>
                <input
                    type="text"
                    className="email"
                    id="email"
                    name="email"
                    placeholder="Ingrese su correo"
                />

                <label htmlFor="subject" className="subject1">Asunto</label>
                <textarea
                    name="subject"
                    className="subject"
                    id="subject"
                    placeholder="Ingrese el asunto"
                >
                </textarea>

                <input type="submit" value="Enviar" className="boton" />

                <input type="hidden" name="_next" value="http://localhost:5173/" />

                <input type="hidden" name="_captcha" value="false" />
            </form>
        </div>

    )

}