export default function Form() {
    return (
        <div id="contact" className="contactanos">
            <h2>Contactanos</h2>
            <form>
                <label htmlFor="name">Nombre</label>
                <input
                    type="text"
                    className="name"
                    id="name"
                    name="name"
                    placeholder="Ingrese su nombre"
                />
                <label htmlFor="email">Correo</label>
                <input
                    type="text"
                    className="email"
                    id="email"
                    name="email"
                    placeholder="Ingrese su correo"
                />
                <label htmlFor="subject">Nombre</label>
                <textarea
                    name="subject"
                    className="subject"
                    id="subject"
                    placeholder="Ingrese el asunto"
                >

                </textarea>

                <input type="button" value="Enviar" />
            </form>
        </div>

    )

}