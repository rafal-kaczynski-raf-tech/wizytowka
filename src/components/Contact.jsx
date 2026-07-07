import { useLanguage } from '../context/LanguageContext'

function Contact() {
  const { t } = useLanguage()

  return (
    <section id="kontakt" className="section contact">
      <div className="container contact-inner">
        <div className="section-heading">
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2>{t.contact.heading}</h2>
        </div>
        <p className="contact-lead">{t.contact.lead}</p>
        <div className="contact-details">
          <a href="mailto:kontakt@raftech-solutions.pl" className="btn btn-primary">
            kontakt@raftech-solutions.pl
          </a>
          <span className="contact-note">{t.contact.emailNote}</span>
        </div>
      </div>
    </section>
  )
}

export default Contact
