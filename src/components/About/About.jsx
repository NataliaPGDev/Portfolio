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
              decido adentrarme en el mundo del desarrollo web mediante la FP de DAW.
              Después de finalizar mis estudios, descubrí que lo que realmente
              me apasiona es entender cómo funcionan las cosas por dentro. Soy
              una desarrolladora que disfruta de aprender, mejorar y trabajar en
              proyectos donde la arquitectura, la lógica de negocio y la calidad
              del código importan. 
            </p>

            <p className="about-text">
              Actualmente reforzando mis conocimientos en distintas tecnologías
              para crecer como desarrolladora backend orientada a proyectos en
              entornos empresariales, entre otros, con el fin de aprender a construir 
              soluciones claras, eficientes y escalables.
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
                <h5>IFCT0244 SAP BTP</h5>
                <span>2026</span>
                <p>Academia Experis</p>

                <h5>IFCT0097 SAP ABAP Cloud</h5>
                <span>2026</span>
                <p>Academia Experis</p>

                <h5>Desarrollo de Aplicaciones Web</h5>
                <span>2024 - 2026</span>
                <p>Davante</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="skills-card h-100">
              <h3 className="skills-title">
                <strong>Experiencia Tech</strong>
              </h3>

              <div className="experience-content mt-3 mb-5">
                 <h5>Zaitec Innova S.L.</h5>
                <span className="experience-period">Marzo - Junio 2026</span>
                <p className="mb-0">
                  Desarrollo web y colaboración en proyectos tecnológicos.
                </p>
              </div>

              <h3 className="skills-title">
                <strong>Otros</strong>
              </h3>

              <div className="experience-content mt-3">
                 <h5>Gestión Proyectos culturales</h5>
                <span className="experience-period">2014-2022</span>
                <p className="mb-0">
                  Formulación, gestión integral y producción de proyectos culturales tanto como ayudante así como responsable de proyecto.
                </p>
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
