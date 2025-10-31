import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import FloatingContact from './components/FloatingContact.jsx'
import AnimatedGrid from './components/AnimatedGrid.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Divisions from './sections/Divisions.jsx'
import Projects from './sections/Projects.jsx'
import Clients from './sections/Clients.jsx'
import Impact from './sections/Impact.jsx'
import News from './sections/News.jsx'
import Contact from './sections/Contact.jsx'

function App() {
  return (
    <>
      <AnimatedGrid />
      <Navbar />
      <main className="relative overflow-hidden">
        <Hero />
        <About />
        <Divisions />
        <Projects />
        <Clients />
        <Impact />
        <News />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <FloatingContact />
    </>
  )
}

export default App
