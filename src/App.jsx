import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import WhyMe from './components/WhyMe'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Skills />
        <Portfolio />
        <WhyMe />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
