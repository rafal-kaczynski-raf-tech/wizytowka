import { useLanguage } from '../context/LanguageContext'

function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>&copy; {year} Rafał Kaczyński &ndash; RafTech Solutions</span>
        <span>{t.footer.tagline}</span>
      </div>
    </footer>
  )
}

export default Footer
