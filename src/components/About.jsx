import { useLanguage } from '../context/LanguageContext'
import photo from '../assets/moja_fotka1.png'

function About() {
  const { t } = useLanguage()

  return (
    <section id="o-mnie" className="section">
      <div className="container about-inner">
        <div className="about-photo-wrap">
          <img src={photo} alt={t.about.heading} className="about-photo" />
        </div>
        <div className="about-content">
          <div className="section-heading">
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2>{t.about.heading}</h2>
          </div>
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <div className="badges">
            {t.about.badges.map((badge) => (
              <span className="badge" key={badge}>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
