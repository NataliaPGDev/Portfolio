import './App.css'

import Hero from './components/Hero/Hero'
import Sidebar from './components/Sidebar/Sidebar'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div className="container-fluid p-0 container-app">
      <Sidebar />
      <main className="d-flex flex-column container-main">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
