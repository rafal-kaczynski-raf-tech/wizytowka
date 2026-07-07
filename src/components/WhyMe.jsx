const reasons = [
  {
    title: 'Inżynierskie podejście',
    description:
      'Projektuję czystą, skalowalną architekturę i skupiam się na długofalowej wydajności kodu.',
  },
  {
    title: 'Przejrzystość i terminowość',
    description:
      'Zapewniam pełną przejrzystość współpracy, dotrzymuję ustalonych terminów oraz wystawiam faktury VAT.',
  },
  {
    title: 'Szybkie wdrożenie',
    description:
      'Szybko wdrażam się w istniejące środowiska i od razu dostarczam wartość Twojemu zespołowi lub projektowi.',
  },
]

function WhyMe() {
  return (
    <section id="dlaczego-ja" className="section section-alt">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Dlaczego warto podjąć współpracę</p>
          <h2>Co mnie wyróżnia</h2>
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
