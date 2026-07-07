import { useLanguage } from '../context/LanguageContext'

function Services() {
  const { t } = useLanguage()
  const mainServices = t.services.items

  return (
    <section id="oferta" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{t.services.eyebrow}</p>
          <h2>{t.services.heading}</h2>
          <p className="services-lead">{t.services.lead}</p>
        </div>
        <div className="cards cards-compact">
          {mainServices.map((service) => (
            <div className="card card-highlight" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="tags">
                {service.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
