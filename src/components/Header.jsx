import logo from '../assets/Logo.png'

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="logo">
          <img src={logo} alt="RafTech Solutions" className="logo-img" />
          <span className="logo-text">
            Raf<span>Tech</span> Solutions
          </span>
        </a>
        <nav className="nav">
          <a href="#oferta">Oferta</a>
          <a href="#o-mnie">O mnie</a>
          <a href="#specjalizacje">Specjalizacje</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#dlaczego-ja">Dlaczego ja</a>
          <a href="#kontakt" className="nav-cta">
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
