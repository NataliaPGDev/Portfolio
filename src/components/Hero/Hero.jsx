import { FiDownload } from 'react-icons/fi'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero-section d-flex flex-column mb-2">
      <div className="section-container section-container--hero">
        {/* Título */}
        <h1 className="display-1 fw-bolder mb-2 text-end" style={{fontFamily: "Inter, sans-serif" }}>
          ¡Hola! Soy,{' '}
          <span className="text-gradient title-gradient">Natalia</span>
        </h1>

        {/* Subtítulo */}
        <h6 className="mb-5 text-end">
          <em>Desarrolladora backend junior con base frontend</em>
        </h6>

        {/* Bloque inferior */}
        <div className="d-flex flex-column col-12 col-md-6 mb-5 ms-md-auto mt-5">
          {/* Descripción */}
          <p className="text-dark mb-5">
            Mi trabajo se centra en la construcción de servicios web combinando
            diseño y lógica de negocio con enfoque en el desarrollo de
            soluciones <strong>Java, Spring Boot y React</strong>. Me apasiona
            crear interfaces limpias, sistemas modulares y soluciones que
            realmente aporten valor.
          </p>

          {/* Botones */}
          <div className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-stretch align-items-sm-center gap-2 mt-2">
            <a
              href="#projects"
              className="btn btn-dark btn-lg rounded-pill shadow-sm transition-hover px-4 d-inline-flex align-items-center justify-content-center gap-2 boton-proyecto"
            >
              <FaArrowUpRightFromSquare size={16} />
              Mis proyectos
            </a>

            <a
              href="#contact"
              className="btn btn-outline-dark btn-lg rounded-pill shadow-sm transition-hover px-4 d-inline-flex align-items-center justify-content-center gap-2 boton-cv"
            >
              <FiDownload size={18} />
              Descargar CV
            </a>
          </div>

          <div className="hero-redes d-flex justify-content-end flex-wrap gap-2 mt-5">
            <a
              href="mailto:ng.desarrolloweb@gmail.com"
              className="d-flex align-items-center gap-2 text-decoration-none text-dark"
            >
              <FaEnvelope size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/natalia-perez-gamero-697a41384"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex align-items-center gap-2 text-decoration-none text-dark"
            >
              <FaLinkedin size={30} />
            </a>

            <a
              href="https://github.com/NataliaPGDev"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex align-items-center gap-2 text-decoration-none text-dark"
            >
              <FaGithub size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
