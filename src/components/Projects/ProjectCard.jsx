import './ProjectCard.css'

function ProjectCard({ title, image, short, onToggle }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-img" />

      <div className="project-content mt-1">
        <h3>{title}</h3>
        <p>{short}</p>

        <button className="read-more-btn" onClick={onToggle}>
          Ver más →
        </button>
      </div>
    </div>
  )
}

export default ProjectCard
