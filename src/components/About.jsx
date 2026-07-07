import { useLanguage } from '../context/LanguageContext'

function About() {
  const { t } = useLanguage()

  return (
    <section id="o-mnie" className="section">
      <div className="container about-inner">
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
    </section>
  )
}

export default About
