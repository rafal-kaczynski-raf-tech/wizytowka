function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <p className="eyebrow">Software Engineer &middot; B2B</p>
        <h1>
          Cześć, tu Rafał <br />z <span>RafTech Solutions</span>
        </h1>
        <p className="hero-lead">
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
