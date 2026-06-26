import { useState } from 'react'
import ProjectCard from './ProjectCard'
import fotoportfolio from '../../assets/img/portfolio.png'
import fotorannkor from '../../assets/img/rannkor.png'
import fotogestfincas from '../../assets/img/gestfincas.png'

import './Projects.css'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const openModal = (project) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  const projects = [
    {
      id: 1,
      title: 'E-commerce Rannkor',
      image: fotorannkor,
      short: 'Tienda online de zapatillas.',
      architecture: 'En proceso de migración',
      enlace: 'https://rannkor.infinityfreeapp.com'
    },
    {
      id: 2,
      title: 'Portfolio',
      image: fotoportfolio,
      short: 'Portfolio React/Bootstrap',
      architecture: 'SPA con componentes reutilizables y layout modular.',
      challenges: 'Sidebar dinámico, scroll suave y diseño responsive.',
      learnings:
        'Optimización de componentes y organización profesional del código.'
    },
    {
      id: 3,
      title: 'App GestFincas',
      image: fotogestfincas,
      short: 'App gestión de comunidades',
      architecture: 'En proceso de testing'
    }
  ]

  return (
    <section id="projects" className="projects-section d-flex">
      <div className="section-container">
        <div className="section-divider">
          <h2 className="section-tab mb-0">Proyectos</h2>
        </div>

        {/* GRID DE CARDS */}
        <div className="row g-4 mt-5 mb-5">
          {projects.map((project) => (
            <div key={project.id} className="col-12 col-md-4">
              <ProjectCard {...project} onToggle={() => openModal(project)} />
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selectedProject && (
          <>
            <div className="modal fade show d-block" tabIndex="-1">
              <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content p-4">
                  {/* HEADER */}
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="m-0">{selectedProject.title}</h3>
                    <button className="btn-close" onClick={closeModal}></button>
                  </div>

                  {/* IMAGEN */}
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="img-fluid rounded mb-4"
                  />
                  {/* DETALLES */}
                  <div className="mb-3">
                    <h5>Arquitectura</h5>
                    <p>{selectedProject.architecture}</p>
                  </div>
                  {/* ENLACES */}
                  <div className="mb-3">
                    <h5>Url:</h5>
                    <a
                      href={selectedProject.enlace}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      {selectedProject.enlace}
                    </a>
                  </div>

                  {/* BOTÓN CERRAR */}
                  <div className="text-end">
                    <button className="btn btn-primary" onClick={closeModal}>
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* BACKDROP */}
            <div
              className="modal-backdrop fade show"
              onClick={closeModal}
            ></div>
          </>
        )}
      </div>
    </section>
  )
}

export default Projects
