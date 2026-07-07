import projekt1 from '../assets/Projekt1.png'
import projekt2 from '../assets/Projekt2.png'
import projekt3 from '../assets/Projekt3.png'
import projekt4 from '../assets/Projekt4.png'
import projekt5 from '../assets/Projekt5.png'
import { useLanguage } from '../context/LanguageContext'

const projectImages = [projekt1, projekt2, projekt3, projekt4, projekt5]

function Portfolio() {
  const { t } = useLanguage()
  const demoProjects = projectImages.map((src, index) => ({
    src,
    alt: t.portfolio.projectAlts[index],
  }))

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{t.portfolio.eyebrow}</p>
          <h2>{t.portfolio.heading}</h2>
          <p className="portfolio-disclaimer">{t.portfolio.disclaimer}</p>
        </div>
        <div className="project-grid">
          {demoProjects.map((project) => (
            <div className="project-card" key={project.src}>
              <img src={project.src} alt={project.alt} loading="lazy" />
            </div>
          ))}
        </div>

        <div className="section-heading portfolio-advanced-heading">
          <p className="eyebrow">{t.portfolio.advancedEyebrow}</p>
          <h2>{t.portfolio.advancedHeading}</h2>
        </div>
        <div className="portfolio-item">
          <p>{t.portfolio.advancedText}</p>
          <div className="tags">
            {t.portfolio.advancedTags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
