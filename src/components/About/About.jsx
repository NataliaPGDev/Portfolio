import { BsFiletypeJava, BsJavascript, BsFiletypePhp } from 'react-icons/bs'
import {
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiSpring,
  SiHtml5
} from 'react-icons/si'
import { FaNodeJs, FaCss3Alt, FaBootstrap } from 'react-icons/fa'

import './About.css'

function About() {
  const technologies = [
    { icon: <BsFiletypeJava />, name: 'Java' },
    { icon: <SiSpring />, name: 'Spring' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <BsFiletypePhp />, name: 'PHP' },
    { icon: <SiMysql />, name: 'MySQL' },
    { icon: <SiPostgresql />, name: 'PostgreSQL' },
    { icon: <SiDocker />, name: 'Docker' },
    { icon: <BsJavascript />, name: 'Javascript' },
    { icon: <SiHtml5 />, name: 'HTML5' },
    { icon: <FaCss3Alt />, name: 'CSS3' },
    { icon: <FaBootstrap />, name: 'Bootstrap' }
  ]

  return (
    <section id="about" className="about-section d-flex flex-column">
      <div className="section-container">
        {/* DESCRIPCIÓN */}
        <div className="row">
          <div className="col-12">
            <div className="section-divider">
              <h2 className="section-tab mb-0">Sobre mí</h2>
            </div>

            <p className="about-text mb-4">
              Tras una larga trayectoria en la gestión de proyectos culturales,
              me adentro en el mundo del desarrollo web mediante la FP de DAW.
              Después de finalizar mis estudios, descubrí que lo que realmente me
              apasiona es entender cómo funcionan las cosas por dentro. Soy una
              desarrolladora que disfruta de aprender, mejorar y trabajar en
              proyectos donde la lógica de negocio, la calidad del código y 
              la experiencia del usuario importan. Me considero una persona 
              curiosa, constante y orientada a resultados.
            </p>

            <p className="about-text">
              Actualmente estoy reforzando mis conocimientos en distintas
              tecnologías para crecer como desarrolladora backend así como en el área de datos,
              y aportar valor construyendo soluciones claras, eficientes y completas.
            </p>
          </div>
        </div>

        {/* SKILLS */}
        <div className="row g-4 mt-4 skills-section">
          {/* Fila 1: Formación + Experiencia */}
          <div className="col-12 col-md-6">
            <div className="skills-card h-100">
              <h3 className="skills-title">
                <strong>Formación</strong>
              </h3>

              <div className="timeline-item mt-4">
                <h5>Desarrollo de Aplicaciones Web</h5>
                <span>2024 - 2026</span>
                <p>Davante</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="skills-card h-100">
              <h3 className="skills-title">
                <strong>Experiencia</strong>
              </h3>

              <div className="experience-content mt-4">
                <span className="experience-period">Marzo - Junio 2026</span>
                <h5>Zaitec Innova S.L.</h5>
                <p className="mb-0">Desarrollo web y colaboración en proyectos tecnológicos.</p>
              </div>
            </div>
          </div>

          {/* Fila 2: Tecnologías */}
          <div className="col-12">
            <div className="skills-card">
              <h3 className="skills-title">
                <strong>Tecnologías</strong>
              </h3>

              <div className="skills-icons mt-4">
                {technologies.map((tech) => (
                  <div
                    className="tech-icon"
                    title={tech.name}
                    aria-label={tech.name}
                    key={tech.name}
                  >
                    {tech.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Fila 3: Soft Skills */}
          <div className="col-12">
            <div className="skills-card">
              <h3 className="skills-title">
                <strong>Soft Skills</strong>
              </h3>

              <div className="lista-softskills d-flex flex-wrap gap-2 mt-3">
                <span className="softskill-badge">Trabajo en equipo</span>
                <span className="softskill-badge">Comunicación efectiva</span>
                <span className="softskill-badge">Resolución de problemas</span>
                <span className="softskill-badge">Adaptación</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
