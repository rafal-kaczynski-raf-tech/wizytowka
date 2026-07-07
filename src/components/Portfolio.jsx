import projekt1 from '../assets/Projekt1.png'
import projekt2 from '../assets/Projekt2.png'
import projekt3 from '../assets/Projekt3.png'
import projekt4 from '../assets/Projekt4.png'
import projekt5 from '../assets/Projekt5.png'

const demoProjects = [
  { src: projekt1, alt: 'FitZone – strona wizytówka dla siłowni z systemem rezerwacji treningów' },
  { src: projekt2, alt: 'Travelix – strona biura podróży z wyszukiwarką ofert i blogiem' },
  { src: projekt3, alt: 'PixelPeak – strona agencji kreatywnej z portfolio i prezentacją usług' },
  { src: projekt4, alt: 'HomeNest – portal nieruchomości z filtrowaniem ofert i panelem dodawania ogłoszeń' },
  { src: projekt5, alt: 'TaskFlow – aplikacja / SaaS do zarządzania projektami z prezentacją funkcji i cennika' },
]

function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Wybrane realizacje z portfolio</p>
          <h2>Przykładowe strony wizytówki i aplikacje</h2>
          <p className="portfolio-disclaimer">
            Wszystkie prezentowane projekty stanowią autorskie koncepcje
            demonstracyjne przygotowane przez RafTech Solutions w celu
            zaprezentowania stylu projektowania, możliwości technologicznych
            oraz podejścia do tworzenia nowoczesnych stron internetowych i
            systemów.
          </p>
        </div>
        <div className="project-grid">
          {demoProjects.map((project) => (
            <div className="project-card" key={project.src}>
              <img src={project.src} alt={project.alt} loading="lazy" />
            </div>
          ))}
        </div>

        <div className="section-heading portfolio-advanced-heading">
          <p className="eyebrow">Zaawansowany projekt technologiczny</p>
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
