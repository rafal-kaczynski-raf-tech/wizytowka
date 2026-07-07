function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="logo">
          Raf<span>Tech</span> Solutions
        </a>
        <nav className="nav">
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
