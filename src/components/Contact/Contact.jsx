import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Contacto() {
  const form = useRef()
  const [status, setStatus] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus('')

    emailjs
      .sendForm(
        'service_fblnvfl', // ← pon aquí tu Service ID
        'template_7hln35k', // ← pon aquí tu Template ID
        form.current,
        'SxrSVdv900cMRkfwY' // ← pon aquí tu Public Key
      )
      .then(() => {
        setStatus('Mensaje enviado correctamente.')
        form.current.reset()
      })
      .catch(() => {
        setStatus('Hubo un error al enviar el mensaje.')
      })
  }

  return (
    <section id="contact" className="contact-section d-flex">
      <div className="section-container">
        <div className="section-divider">
          <h2 className="section-tab mb-0">Contacto</h2>
        </div>

        <div className="row g-5">
          {/* Columna izquierda: datos */}
          <div className="col-md-5 d-flex flex-column gap-3">
            <a
              href="mailto:ng.desarrolloweb@gmail.com"
              className="d-flex align-items-center gap-2 text-decoration-none text-dark"
            >
              <FaEnvelope size={20} />
              ng.desarrolloweb@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/natalia-perez-gamero-697a41384"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex align-items-center gap-2 text-decoration-none text-dark"
            >
              <FaLinkedin size={20} />
              LinkedIn
            </a>

            <a
              href="https://github.com/NataliaPGDev"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex align-items-center gap-2 text-decoration-none text-dark"
            >
              <FaGithub size={20} />
              GitHub
            </a>
          </div>

          {/* Columna derecha: formulario */}
          <div className="col-md-7">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="d-flex flex-column gap-3"
            >
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                required
                className="form-control"
              />

              <input
                type="email"
                name="email"
                placeholder="Tu email"
                required
                className="form-control"
              />

              <textarea
                name="message"
                placeholder="Tu mensaje"
                required
                className="form-control"
                rows="5"
              />

              <button type="submit" className="btn btn-dark">
                Enviar mensaje
              </button>

              {status && <p className="mt-2 text-muted">{status}</p>}
            </form>
          </div>
        </div>
        <hr className="mt-4"></hr>
        <p className="text-center fs-6">
          &copy; NGDesarrolloWeb. Todos los derechos reservados.
        </p>
      </div>
    </section>
  )
}
