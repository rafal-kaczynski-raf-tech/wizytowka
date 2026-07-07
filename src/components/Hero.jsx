import logo from '../assets/Logo.png'

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <img src={logo} alt="RafTech Solutions" className="hero-logo" />
        <p className="eyebrow">Strony wizytówki dla firm &middot; Aplikacje</p>
        <h1>
          Cześć, tu Rafał <br />z <span>RafTech Solutions</span>
        </h1>
        <p className="hero-lead">
          Tworzę nowoczesne strony wizytówki dla firm oraz aplikacje webowe
          i mobilne &ndash; szybko, estetycznie i z dbałością o szczegóły.
        </p>
        <p className="hero-lead hero-lead-muted">
          Szukasz sprawdzonego inżyniera oprogramowania, który nie tylko
          &bdquo;pisze kod&rdquo;, ale rozumie zaawansowaną architekturę,
          optymalizuje procesy i buduje skalowalne systemy od A do Z? Jesteś
          we właściwym miejscu.
        </p>
        <div className="hero-actions">
          <a href="#kontakt" className="btn btn-primary">
            Porozmawiajmy o projekcie
          </a>
          <a href="#portfolio" className="btn btn-ghost">
            Zobacz realizacje
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
