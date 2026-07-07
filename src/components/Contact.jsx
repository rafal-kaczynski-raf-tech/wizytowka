import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

const CONTACT_EMAIL = 'rafal.kaczynski@raf-tech.com'
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

const initialValues = { name: '', email: '', subject: '', message: '' }

function Contact() {
  const { t } = useLanguage()
  const { form } = t.contact
  const [values, setValues] = useState(() => ({
    ...initialValues,
    subject: form.subjectOptions[0].value,
  }))
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const subjectOption = form.subjectOptions.find(
      (option) => option.value === values.subject,
    )
    const subjectLine = `[${form.mailSubjectPrefix}] ${subjectOption?.label ?? ''} – ${values.name}`

    setStatus('sending')

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: subjectLine,
          from_name: values.name,
          email: values.email,
          replyto: values.email,
          category: subjectOption?.label ?? values.subject,
          message: values.message,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus('success')
        setValues({ ...initialValues, subject: form.subjectOptions[0].value })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const handleSendAnother = () => {
    setStatus('idle')
  }

  return (
    <section id="kontakt" className="section contact">
      <div className="container contact-inner">
        <div className="section-heading">
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2>{t.contact.heading}</h2>
        </div>
        <p className="contact-lead">{t.contact.lead}</p>

        {status === 'success' ? (
          <div className="contact-success">
            <p className="contact-success-title">{form.successTitle}</p>
            <p className="contact-success-text">{form.successText}</p>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={handleSendAnother}
            >
              {form.sendAnother}
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="contact-name">{form.nameLabel}</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                disabled={status === 'sending'}
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
                disabled={status === 'sending'}
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
                disabled={status === 'sending'}
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
                disabled={status === 'sending'}
                value={values.message}
                onChange={handleChange}
                placeholder={form.messagePlaceholder}
              />
            </div>

            {status === 'error' && (
              <p className="contact-error-text">{form.errorText}</p>
            )}

            <button
              type="submit"
              className="btn btn-primary contact-submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? form.sending : form.submit}
            </button>
          </form>
        )}

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
