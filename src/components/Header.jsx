import logo from '../assets/Logo.png'
import { useLanguage } from '../context/LanguageContext'

function Header() {
  const { lang, t, toggleLanguage } = useLanguage()

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
          <a href="#oferta">{t.nav.oferta}</a>
          <a href="#o-mnie">{t.nav.oMnie}</a>
          <a href="#specjalizacje">{t.nav.specjalizacje}</a>
          <a href="#portfolio">{t.nav.portfolio}</a>
          <a href="#dlaczego-ja">{t.nav.dlaczegoJa}</a>
          <a href="#kontakt" className="nav-cta">
            {t.nav.kontakt}
          </a>
          <button
            type="button"
            className="lang-switch"
            onClick={toggleLanguage}
            aria-label="Zmień język / Change language"
          >
            <span className={lang === 'pl' ? 'lang-option lang-active' : 'lang-option'}>
              🇵🇱 PL
            </span>
            <span className="lang-sep">/</span>
            <span className={lang === 'en' ? 'lang-option lang-active' : 'lang-option'}>
              🇬🇧 GB
            </span>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
