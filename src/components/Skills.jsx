import { useLanguage } from '../context/LanguageContext'

function Skills() {
  const { t } = useLanguage()
  const skillGroups = t.skills.groups

  return (
    <section id="specjalizacje" className="section section-alt">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{t.skills.eyebrow}</p>
          <h2>{t.skills.heading}</h2>
          <p className="services-lead">{t.skills.lead}</p>
        </div>
        <div className="cards">
          {skillGroups.map((group) => (
            <div className="card" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <div className="tags">
                {group.tags.map((tag) => (
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

export default Skills
