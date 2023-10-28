import Nav from './assets/components/Nav'
import Banner from './assets/components/Home'
import About from './assets/components/About'
import Services from './assets/components/Services'
import Projects from './assets/components/Projects'
import Contact from './assets/components/Contact'
import Footer from './assets/components/Footer'

function App() {
  

  return (
    <>
      <div className="bg-[#474E68]">
        <Nav />
        <Banner/>
        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer/>
      </div>
    </>
  )
}

export default App
