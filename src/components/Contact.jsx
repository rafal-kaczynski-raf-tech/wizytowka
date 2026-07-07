import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

const CONTACT_EMAIL = 'rafal.kaczynski@raf-tech.com'

const initialValues = { name: '', email: '', subject: '', message: '' }

function Contact() {
  const { t } = useLanguage()
  const { form } = t.contact
  const [values, setValues] = useState(() => ({
    ...initialValues,
    subject: form.subjectOptions[0].value,
  }))

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subjectOption = form.subjectOptions.find(
      (option) => option.value === values.subject,
    )
    const subjectLine = `[${form.mailSubjectPrefix}] ${subjectOption?.label ?? ''} – ${values.name}`
    const bodyLines = [
      `${form.nameLabel}: ${values.name}`,
      `${form.emailLabel}: ${values.email}`,
      '',
      `${form.messageLabel}:`,
      values.message,
    ]

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subjectLine,
    )}&body=${encodeURIComponent(bodyLines.join('\n'))}`

    window.location.href = mailtoUrl
  }

  return (
    <section id="kontakt" className="section contact">
      <div className="container contact-inner">
        <div className="section-heading">
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2>{t.contact.heading}</h2>
        </div>
        <p className="contact-lead">{t.contact.lead}</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="contact-name">{form.nameLabel}</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={values.name}
              onChange={handleChange}
              placeholder={form.namePlaceholder}
            />
          </div>

          <div className="form-row">
            <label htmlFor="contact-email">{form.emailLabel}</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={values.email}
              onChange={handleChange}
              placeholder={form.emailPlaceholder}
            />
          </div>

          <div className="form-row">
            <label htmlFor="contact-subject">{form.subjectLabel}</label>
            <select
              id="contact-subject"
              name="subject"
              value={values.subject}
              onChange={handleChange}
            >
              {form.subjectOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-row">
            <label htmlFor="contact-message">{form.messageLabel}</label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              required
              value={values.message}
              onChange={handleChange}
              placeholder={form.messagePlaceholder}
            />
          </div>

          <button type="submit" className="btn btn-primary contact-submit">
            {form.submit}
          </button>
        </form>

        <div className="contact-details">
          <span className="contact-note">{t.contact.directEmailLabel}</span>
          <a href={`mailto:${CONTACT_EMAIL}`} className="contact-direct-email">
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
