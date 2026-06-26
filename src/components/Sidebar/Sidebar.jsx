import { IoPersonCircleOutline } from "react-icons/io5";
import { IoIosBuild } from "react-icons/io";
import { VscCallOutgoing } from "react-icons/vsc";

import "./Sidebar.css";
import profilePhoto from "../../assets/img/foto-portfolio.svg";

const navItems = [
  {
    href: "#about",
    text: "Sobre mí",
    icon: <IoPersonCircleOutline size={22} />
  },
  {
    href: "#projects",
    text: "Proyectos",
    icon: <IoIosBuild size={18} />
  },
  {
    href: "#contact",
    text: "Contacto",
    icon: <VscCallOutgoing size={18} />
  }
];

function SidebarPanel({ variant = "desktop", dismissOffcanvas = false }) {
  const containerClass =
    variant === "offcanvas"
      ? "sidebar-contenedor sidebar-contenedor--offcanvas"
      : "sidebar-contenedor";

  return (
    <div className={`d-flex flex-column h-100 ms-auto ${containerClass}`}>
      <div
        className={
          variant === "offcanvas"
            ? "sidebar-photo-container mt-3"
            : "sidebar-photo-container mt-5 pt-4"
        }
      >
        <img
          src={profilePhoto}
          alt="Foto de perfil"
          className="sidebar-img"
        />
        <div className="sidebar-marco"></div>
      </div>

      <nav className="sidebar-links mt-4 mt-lg-5 d-flex flex-column flex-grow-1">
        {navItems.map((item) => (
          <a
            key={item.text}
            href={item.href}
            className="px-3 py-2 d-flex align-items-center gap-2"
            {...(dismissOffcanvas ? { "data-bs-dismiss": "offcanvas" } : {})}
          >
            {item.icon}
            <span>{item.text}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}

function Sidebar() {
  return (
    <>
      <nav className="navbar navbar-light bg-white border-bottom sidebar-mobile d-lg-none fixed-top">
        <div className="container-fluid px-3">
          <span className="navbar-brand mb-0 fw-semibold">Natalia</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebarOffcanvas"
            aria-controls="sidebarOffcanvas"
            aria-label="Abrir menú"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-start sidebar-offcanvas d-lg-none"
        tabIndex="-1"
        id="sidebarOffcanvas"
        aria-labelledby="sidebarOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarOffcanvasLabel">
            Menú
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Cerrar menú"
          ></button>
        </div>
        <div className="offcanvas-body p-3">
          <SidebarPanel variant="offcanvas" dismissOffcanvas />
        </div>
      </div>

      <aside className="sidebar position-fixed d-none d-lg-flex flex-column vh-100 p-0">
        <SidebarPanel />
      </aside>
    </>
  );
}

export default Sidebar;
