export default function Footer() {

    return (
        <footer className="footer">
            <div className="footer__contact">
                <h2>Siguenos</h2>
                <ul>
                    <li><a href="https://wa.me/message/TVDN3JXWYDNBO1" target="_blank"><i class="fa-brands fa-whatsapp"></i></a></li>
                    <li><a href="https://x.com/JvdataSoft" target="_blank"><i class="fa-brands fa-x-twitter"></i> </a></li>
                    <li><a href="https://www.facebook.com/share/168dF3hMSa/" target="_blank"><i class="fa-brands fa-facebook"></i></a></li>
                </ul>
            </div>
            <p>Todos los derechos reservados  <b>&#169;</b>. JVData<b>Soft</b> {new Date().getFullYear()}</p>
        </footer>
    )

}
