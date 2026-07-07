const skillGroups = [
  {
    title: 'Backend & Architektura',
    description:
      'Moim głównym środowiskiem backendowym jest ekosystem TypeScript/JavaScript, ze szczególnym naciskiem na NestJS i Express. Projektuję wydajne API (REST, GraphQL, WebSocket, SSE), pracuję z systemami kolejkowymi (RabbitMQ) oraz bazami danych (PostgreSQL, Redis). Wspieram się również Pythonem, zwłaszcza w zadaniach związanych z algorytmiką i AI.',
    tags: [
      'Node.js',
      'NestJS',
      'Express',
      'TypeScript',
      'REST / GraphQL',
      'WebSocket / SSE',
      'RabbitMQ',
      'PostgreSQL',
      'Redis',
      'Python',
    ],
  },
  {
    title: 'Sztuczna Inteligencja i Systemy Multi-Agentowe',
    description:
      'Integruję zaawansowane modele LLM (OpenAI, Azure OpenAI) z aplikacjami biznesowymi. Wykorzystuję LangGraph.js i LangChain.js do budowy orkiestracji agentów, wdrażam mechanizmy RAG, Human-in-the-loop oraz dbam o bezpieczeństwo zapytań (Guardrails, Presidio PII).',
    tags: [
      'OpenAI / Azure OpenAI',
      'LangGraph.js',
      'LangChain.js',
      'RAG',
      'Human-in-the-loop',
      'Guardrails',
      'Presidio PII',
      'Langfuse',
    ],
  },
  {
    title: 'Aplikacje mobilne i Frontend',
    description:
      'Tworzę płynne aplikacje cross-platformowe wykorzystując React Native oraz buduję nowoczesne interfejsy webowe w Angularze. Radzę sobie z zaawansowanym zarządzaniem stanem (RxJS) i integracją skomplikowanych widżetów.',
    tags: ['React Native', 'React', 'Angular', 'RxJS'],
  },
]

function Skills() {
  return (
    <section id="specjalizacje" className="section section-alt">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">W czym się specjalizuję</p>
          <h2>Kompleksowe wsparcie techniczne</h2>
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
