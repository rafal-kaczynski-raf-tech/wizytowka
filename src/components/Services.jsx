const mainServices = [
  {
    title: 'Strony wizytówki dla firm',
    description:
      'Nowoczesne, szybkie i responsywne strony internetowe, które budują profesjonalny wizerunek Twojej firmy, prezentują ofertę i przyciągają nowych klientów.',
    tags: ['Strona firmowa', 'Landing page', 'Responsywność', 'SEO-friendly'],
  },
  {
    title: 'Aplikacje webowe i mobilne',
    description:
      'Dedykowane aplikacje webowe (React, Angular) oraz mobilne (React Native) dopasowane do procesów i potrzeb Twojego biznesu.',
    tags: ['React', 'Angular', 'React Native', 'Dedykowane systemy'],
  },
  {
    title: 'Projektowanie Stron i Aplikacji Mobilnych',
    description:
      'Projektuję estetyczne i intuicyjne interfejsy dla stron oraz aplikacji mobilnych, dbając o wygodę użytkownika i spójny wizerunek marki na każdym urządzeniu.',
    tags: ['UI/UX', 'Design', 'Prototypowanie', 'Mobile-first'],
  },
]

function Services() {
  return (
    <section id="oferta" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Co robię</p>
          <h2>Strony wizytówki dla firm oraz aplikacje</h2>
          <p className="services-lead">
            To mój główny obszar działania &ndash; jeśli potrzebujesz nowej
            strony dla firmy albo dedykowanej aplikacji, jestem w stanie
            zrealizować to szybko i solidnie.
          </p>
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
