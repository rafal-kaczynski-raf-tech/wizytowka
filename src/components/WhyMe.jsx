import { useLanguage } from '../context/LanguageContext'

function WhyMe() {
  const { t } = useLanguage()
  const reasons = t.whyMe.reasons

  return (
    <section id="dlaczego-ja" className="section section-alt">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{t.whyMe.eyebrow}</p>
          <h2>{t.whyMe.heading}</h2>
        </div>
        <div className="cards cards-compact">
          {reasons.map((reason) => (
            <div className="card" key={reason.title}>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyMe
