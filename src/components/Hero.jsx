import logo from '../assets/Logo.png'
import { useLanguage } from '../context/LanguageContext'

function Hero() {
  const { t } = useLanguage()

  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <img src={logo} alt="RafTech Solutions" className="hero-logo" />
        <p className="eyebrow">{t.hero.eyebrow}</p>
        <h1>
          {t.hero.heading1} <br />
          {t.hero.heading2} <span>RafTech Solutions</span>
        </h1>
        <p className="hero-lead">{t.hero.lead1}</p>
        <p className="hero-lead hero-lead-muted">{t.hero.lead2}</p>
        <div className="hero-actions">
          <a href="#kontakt" className="btn btn-primary">
            {t.hero.ctaPrimary}
          </a>
          <a href="#portfolio" className="btn btn-ghost">
            {t.hero.ctaGhost}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
