function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Wybrane realizacje z portfolio</p>
          <h2>Travel Assistant &ndash; Multi-agentowy system AI</h2>
        </div>
        <div className="portfolio-item">
          <p>
            Zaprojektowałem i rozwijałem zaawansowanego asystenta podróży
            opartego o LLM. System obejmuje backend w NestJS orkiestrujący
            agentów (LangGraph.js), klasyfikację złożoności zapytań oraz
            integrację z platformami rezerwacyjnymi. Wdrożyłem pełen system
            obserwowalności (Langfuse), pętlę feedbacku oraz interaktywne
            interfejsy czatu w React Native i Angularze.
          </p>
          <div className="tags">
            <span className="tag">NestJS</span>
            <span className="tag">LangGraph.js</span>
            <span className="tag">LLM Orchestration</span>
            <span className="tag">Langfuse</span>
            <span className="tag">React Native</span>
            <span className="tag">Angular</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
