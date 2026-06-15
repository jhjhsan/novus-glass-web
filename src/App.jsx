import { useState } from "react";
import {
  BadgeCheck,
  CheckCircle2,
  Clock,
  Droplets,
  Eraser,
  Factory,
  Leaf,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import novusLogo from "./assets/novus-logo-transparent.png";
import vidrioRayado from "./assets/vidrio-rayado-antes.png";
import vidrioPulido from "./assets/vidrio-restaurado-despues.png";
import "./index.css";

const whatsappNumber = "56994365061";

const services = [
  {
    icon: <Eraser />,
    title: "Eliminación de rayas en vidrios",
    text: "Eliminamos rayas en ventanas termopanel, vidrios laminados y templados, ventanales, shower doors, espejos, puertas de horno, cocinas encimeras, mesas de vidrio y otras superficies.",
  },
  {
    icon: <Sparkles />,
    title: "Grafitis y rayados vandálicos",
    text: "Realizamos eliminación profesional de grafitis, rayados vandálicos y marcas que deterioran la imagen de edificios, locales comerciales, comunidades y espacios residenciales.",
  },
  {
    icon: <Droplets />,
    title: "Sarro y depósitos minerales",
    text: "Recuperamos superficies afectadas por manchas de sarro, depósitos minerales y opacidad causada por humedad, agua dura o exposición prolongada.",
  },
  {
    icon: <Wrench />,
    title: "Corrosión por ácidos",
    text: "Tratamos daños provocados por ácidos y agentes corrosivos, evaluando técnicamente cada superficie para definir el proceso de restauración adecuado.",
  },
];

const whyItems = [
  {
    icon: <ShieldCheck />,
    title: "Sistema técnico, no pulido convencional",
    text: "Aplicamos un sistema de recuperación técnica diseñado para cristales de alto valor, con procesos controlados y resultados de alta precisión.",
  },
  {
    icon: <Factory />,
    title: "Ahorro frente al reemplazo",
    text: "Reducimos costos asociados a fabricación, logística, distribución, retiro, reinstalación y mano de obra en proyectos corporativos y residenciales.",
  },
  {
    icon: <Clock />,
    title: "Servicio directamente en terreno",
    text: "Ejecutamos el trabajo en obra, edificio, comunidad, local comercial o residencia, disminuyendo tiempos frente al cambio completo del cristal.",
  },
  {
    icon: <Leaf />,
    title: "Solución sostenible",
    text: "Recuperar una superficie permite extender la vida útil del vidrio y disminuir residuos, entregando una alternativa responsable al reemplazo.",
  },
];

const applications = [
  "Ventanas termopanel",
  "Vidrios laminados",
  "Vidrios templados",
  "Ventanales",
  "Shower doors",
  "Espejos",
  "Fachadas comerciales",
  "Mesas de vidrio",
  "Puertas de horno",
  "Cocinas encimeras",
  "Lavaplatos de acero inoxidable",
  "Superficies de vidrio de alto valor",
];

const commonCases = [
  "Rayas por limpieza incorrecta",
  "Sarro en shower doors",
  "Grafitis en fachadas",
  "Vidrios dañados en obra",
  "Corrosión por ácidos",
  "Opacidad en ventanales",
  "Marcas en termopaneles",
  "Cristales de alto valor deteriorados",
];

const constructionPoints = [
  "Especialistas en daños críticos.",
  "Servicio ejecutado directamente en terreno.",
  "Tiempos de respuesta superiores a los plazos de fabricación y reinstalación.",
  "Reducción de costos de logística, distribución y mano de obra.",
  "Resultados de alta precisión exigidos por estándares de construcción moderna.",
];

const residentialPoints = [
  "Especialistas en devolver la transparencia a superficies que parecen imposibles de recuperar.",
  "Sistema de recirculación patentado para un pulido más rápido y limpio.",
  "Intervención sin suciedad en interiores habitados.",
  "Proceso diseñado para proteger alfombras, muebles y espacios interiores.",
  "Evita el alto costo y la molestia de cambiar ventanales.",
];

const advantages = [
  {
    icon: <BadgeCheck />,
    title: "Técnicos calificados",
    text: "Equipo preparado y con las certificaciones necesarias para trabajar en obras, proyectos corporativos, comunidades y espacios residenciales.",
  },
  {
    icon: <ShieldCheck />,
    title: "Tecnología de punta",
    text: "Procesos avanzados de pulido y restauración que permiten recuperar cristales de alto valor con precisión técnica.",
  },
  {
    icon: <Clock />,
    title: "Respuesta rápida",
    text: "Intervenciones en terreno con tiempos menores frente al reemplazo, fabricación, traslado y reinstalación de cristales.",
  },
  {
    icon: <Leaf />,
    title: "Ahorro garantizado",
    text: "Reducimos costos operativos y residuos, ofreciendo una alternativa sostenible frente al cambio completo del vidrio.",
  },
];

const coverageZones = [
  "Región Metropolitana",
  "Norte Grande",
  "Norte Chico",
  "Zona Centro-Sur",
  "Zona Austral",
];

function App() {
  const [comparePosition, setComparePosition] = useState(50);

  const handleQuoteSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name") || "";
    const company = formData.get("company") || "";
    const phone = formData.get("phone") || "";
    const email = formData.get("email") || "";
    const projectType = formData.get("projectType") || "";
    const message = formData.get("message") || "";

    const whatsappMessage = `
Hola NOVUS Glass, quiero solicitar una cotización.

Nombre: ${name}
Empresa: ${company}
Teléfono: ${phone}
Email: ${email}
Tipo de proyecto: ${projectType}

Mensaje:
${message}
    `.trim();

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank",
      "noreferrer"
    );
  };

  return (
    <main className="site">
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="WhatsApp NOVUS Glass"
      >
        <FaWhatsapp />
      </a>

      <header className="navbar">
        <a href="#inicio" className="nav-logo" aria-label="NOVUS Glass">
          <img src={novusLogo} alt="NOVUS Glass" />
        </a>

        <nav className="nav-menu" aria-label="Navegación principal">
          <a href="#empresa">Empresa</a>
          <a href="#servicios">Servicios</a>
          <a href="#constructoras">Constructoras</a>
          <a href="#residencial">Residencial</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-content">
          <div className="hero-badge">Servicio técnico profesional</div>

          <p className="hero-brand">NOVUS Glass</p>

          <h1>Líderes en restauración de superficies de vidrio</h1>

          <div className="hero-copy">
            <p>
              En NOVUS Glass combinamos décadas de experiencia con equipos de
              última generación para resolver los desafíos más exigentes en
              vidrios y cristales.
            </p>

            <p>
              Nuestro servicio no es un pulido convencional: es un sistema de
              recuperación técnica que garantiza resultados impecables en
              cristales de alto valor.
            </p>
          </div>

          <div className="hero-actions">
            <a href="#contacto" className="btn btn-primary">
              Solicitar cotización
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>20+</strong>
              <span>Años de experiencia</span>
            </div>
            <div>
              <strong>Alto valor</strong>
              <span>Cristales recuperados</span>
            </div>
            <div>
              <strong>Chile</strong>
              <span>Cobertura nacional</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image" />
          <div className="hero-card">
            <strong>Restauración técnica avanzada</strong>
            <p>
              Sistema de recuperación para cristales de alto valor, diseñado
              para reducir costos, tiempos de reemplazo e impacto ambiental.
            </p>
          </div>
        </div>
      </section>

      <section id="empresa" className="section section-white">
        <div className="section-inner two-columns">
          <div>
            <span className="section-kicker">Nuestra empresa</span>
            <h2>
              Especialistas en restauración técnica de ventanas y superficies de
              vidrio
            </h2>
          </div>

          <div className="text-block">
            <p>
              Con más de 20 años de experiencia en el rubro, nos hemos
              consolidado como especialistas en la restauración técnica de
              ventanas y superficies de vidrio.
            </p>

            <p>
              Nuestra experiencia está respaldada por el uso de tecnología de
              punta y la confianza de importantes constructoras del mercado,
              quienes nos prefieren por nuestra capacidad de respuesta y altos
              estándares de calidad.
            </p>

            <p>
              Contamos con un equipo técnico altamente calificado en procesos
              avanzados de pulido, dedicado a devolver la transparencia e
              integridad a cada superficie.
            </p>

            <p>
              Más que un servicio, ofrecemos una asesoría integral: realizamos
              visitas técnicas en terreno para diagnosticar y orientar cada
              proyecto según sus necesidades específicas, garantizando resultados
              impecables y eficiencia en costos.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="section-inner">
          <div className="mission-card">
            <span className="section-kicker">Misión NOVUS Glass</span>
            <h2>
              Reducir costos y tiempos mediante restauración avanzada de vidrios
            </h2>

            <p>
              Nuestra misión es reducir costos y tiempos mediante la
              restauración avanzada de ventanas y superficies de vidrio,
              ofreciendo una alternativa innovadora y sostenible al reemplazo de
              materiales.
            </p>

            <p>
              Nos comprometemos a entregar soluciones de alta precisión que
              minimicen el impacto ambiental, generando valor real para clientes
              residenciales y corporativos a través de la excelencia técnica, la
              integridad y una pasión inquebrantable por la perfección en cada
              detalle.
            </p>

            <p>
              Aplicamos técnicas vanguardistas y responsables para asegurar
              resultados duraderos, transformando problemas en soluciones
              invisibles.
            </p>

            <blockquote>
              “Transformamos problemas en soluciones invisibles.”
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section why-section">
        <div className="section-inner">
          <div className="section-head">
            <span className="section-kicker">Por qué elegir NOVUS Glass</span>
            <h2>Una solución técnica para recuperar, no reemplazar</h2>
            <p>
              Nuestro enfoque permite resolver daños complejos en vidrios y
              cristales, reduciendo costos, tiempos de operación y el impacto
              ambiental asociado al reemplazo de materiales.
            </p>
          </div>

          <div className="why-grid">
            {whyItems.map((item) => (
              <article className="why-card" key={item.title}>
                <div className="why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="section section-white">
        <div className="section-inner">
          <div className="section-head">
            <span className="section-kicker">Nuestros servicios</span>
            <h2>Recuperación técnica para superficies de vidrio</h2>
            <p>
              Restauramos superficies afectadas por rayas, grafitis, corrosión,
              depósitos minerales y sarro, recuperando transparencia,
              funcionalidad y valor estético.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section applications">
        <div className="section-inner">
          <div className="section-head">
            <span className="section-kicker">Aplicaciones</span>
            <h2>Trabajamos sobre múltiples superficies</h2>
            <p>
              Evaluamos cada proyecto en terreno para diagnosticar el daño y
              orientar la mejor solución técnica según la necesidad específica.
            </p>
          </div>

          <div className="applications-grid">
            {applications.map((item) => (
              <div className="application-item" key={item}>
                <CheckCircle2 size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="cases-box">
            <p className="cases-title">Casos frecuentes que resolvemos</p>
            <div className="cases-list">
              {commonCases.map((item) => (
                <span className="case-chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section compare-section">
        <div className="section-inner">
          <div className="section-head compare-head">
            <span className="section-kicker">Antes y después</span>
            <h2>Vidrios deteriorados pueden recuperar su transparencia</h2>
            <p>
              Desliza la línea para comparar una superficie de vidrio afectada
              por rayas, desgaste u opacidad frente a una superficie restaurada
              con acabado limpio y profesional.
            </p>
          </div>

          <div className="compare-box">
            <div className="compare-clean">
              <img src={vidrioPulido} alt="Vidrio restaurado NOVUS Glass" />
            </div>

            <div
              className="compare-damaged"
              style={{ width: `${comparePosition}%` }}
            >
              <img src={vidrioRayado} alt="Vidrio dañado antes de restaurar" />
            </div>

            <div
              className="compare-line"
              style={{ left: `${comparePosition}%` }}
            >
              <div className="compare-handle">↔</div>
            </div>

            <div className="compare-label compare-label-left">Antes</div>
            <div className="compare-label compare-label-right">Después</div>

            <input
              type="range"
              min="10"
              max="90"
              value={comparePosition}
              onChange={(event) =>
                setComparePosition(Number(event.target.value))
              }
              className="compare-range"
              aria-label="Comparar vidrio antes y después"
            />
          </div>
        </div>
      </section>

      <section id="constructoras" className="section section-white">
        <div className="section-inner split-feature">
          <div className="feature-image construction-image">
            <div className="feature-image-card">
              <Factory />
              <span>Soluciones técnicas para obras y proyectos</span>
            </div>
          </div>

          <div className="feature-content">
            <span className="section-kicker">Constructoras e inmobiliarias</span>
            <h2>Eficiencia técnica y reducción de costos operativos</h2>

            <p>
              Ofrecemos un sistema de restauración de cristales de alto
              rendimiento para empresas constructoras e inmobiliarias. Nuestro
              proceso utiliza un flujo constante de abrasivos y temperatura
              controlada que evita el estrés térmico del material, logrando un
              acabado nivel fábrica en tiempo récord.
            </p>

            <ul className="feature-list">
              {constructionPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="residencial" className="section section-soft">
        <div className="section-inner split-feature reverse">
          <div className="feature-content">
            <span className="section-kicker">Servicios residenciales</span>
            <h2>
              Devolvemos transparencia a superficies difíciles de recuperar
            </h2>

            <p>
              Restauramos vidrios residenciales afectados por rayas, sarro,
              opacidad y desgaste, evitando el alto costo y la molestia de
              reemplazar ventanales o superficies de vidrio de alto valor.
            </p>

            <ul className="feature-list">
              {residentialPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="feature-image residential-image">
            <div className="feature-image-card">
              <ShieldCheck />
              <span>Intervención limpia para espacios habitados</span>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="section-inner trust-inner">
          <div>
            <span className="section-kicker">Confianza y cobertura</span>
            <h2>Servicio técnico en terreno con cobertura nacional</h2>
          </div>

          <p>
            NOVUS Glass entrega soluciones para constructoras, inmobiliarias,
            comunidades, edificios, locales comerciales y clientes
            residenciales, con capacidad de respuesta y altos estándares de
            calidad.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="section-inner">
          <div className="section-head">
            <span className="section-kicker">Ventajas</span>
            <h2>Una alternativa técnica al reemplazo de cristales</h2>
            <p>
              Recuperar una superficie puede ser más rápido, eficiente y
              sostenible que reemplazarla por completo.
            </p>
          </div>

          <div className="advantages-grid">
            {advantages.map((item) => (
              <article className="advantage-card" key={item.title}>
                <div className="advantage-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="section contact-section">
        <div className="section-inner contact-grid">
          <div className="contact-info">
            <span className="section-kicker">Contacto</span>
            <h2>Solicita una cotización</h2>
            <p>
              Realizamos visitas técnicas en terreno para diagnosticar el daño,
              orientar el proyecto y proponer la solución más eficiente según
              cada superficie.
            </p>

            <div className="contact-items">
              <a href={`tel:+${whatsappNumber}`}>
                <Phone size={20} />
                <span>+56 9 9436 5061</span>
              </a>

              <a href="tel:+56982590440">
                <Phone size={20} />
                <span>+56 9 8259 0440</span>
              </a>

              <a href="mailto:contacto@novusglass.cl">
                <Mail size={20} />
                <span>contacto@novusglass.cl</span>
              </a>

              <div>
                <MapPin size={20} />
                <span>Lautaro 2102, Quilicura, Santiago, RM</span>
              </div>
            </div>
          </div>

          <form className="contact-form premium-form" onSubmit={handleQuoteSubmit}>
            <div className="form-heading">
              <span>Formulario de cotización</span>
              <h3>Cuéntanos sobre tu proyecto</h3>
              <p>
                Completa los datos y el mensaje se enviará directamente a NOVUS
                Glass por WhatsApp.
              </p>
            </div>

            <div className="form-row">
              <input name="name" type="text" placeholder="Nombre" required />
              <input name="company" type="text" placeholder="Empresa" />
            </div>

            <div className="form-row">
              <input name="phone" type="tel" placeholder="Teléfono" required />
              <input name="email" type="email" placeholder="Email" />
            </div>

            <select name="projectType" defaultValue="" required>
              <option value="" disabled>
                Tipo de proyecto
              </option>
              <option>Constructora / Inmobiliaria</option>
              <option>Comunidad / Edificio</option>
              <option>Residencial</option>
              <option>Local comercial / Retail</option>
              <option>Otro</option>
            </select>

            <textarea
              name="message"
              rows="5"
              placeholder="Cuéntanos qué superficie necesitas restaurar"
              required
            />

            <button type="submit">Solicitar cotización</button>

            <p className="form-note">
              También puedes contactarnos directamente por teléfono o correo.
            </p>
          </form>

          <div className="coverage-bar">
            <div className="coverage-bar-main">
              <div className="coverage-icon">
                <MapPin size={24} />
              </div>

              <div>
                <strong>Cobertura nacional</strong>
                <p>
                  Servicio técnico en terreno para proyectos residenciales,
                  comerciales, comunidades, constructoras e inmobiliarias en
                  distintas zonas de Chile.
                </p>
              </div>
            </div>

            <div className="coverage-zones">
              {coverageZones.map((zone) => (
                <span key={zone}>{zone}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="section-inner footer-top">
          <div className="footer-brand">
            <img src={novusLogo} alt="NOVUS Glass" />
            <p>
              Líderes en restauración de superficies de vidrio. Soluciones
              técnicas para clientes residenciales, constructoras, inmobiliarias,
              comunidades y espacios comerciales.
            </p>
          </div>

          <div className="footer-col">
            <h4>Servicios</h4>
            <a href="#servicios">Eliminación de rayas</a>
            <a href="#servicios">Grafitis y corrosión</a>
            <a href="#servicios">Sarro y depósitos minerales</a>
            <a href="#servicios">Restauración en terreno</a>
          </div>

          <div className="footer-col">
            <h4>Aplicaciones</h4>
            <a href="#constructoras">Constructoras</a>
            <a href="#constructoras">Inmobiliarias</a>
            <a href="#residencial">Residencial</a>
            <a href="#contacto">Comunidades y edificios</a>
          </div>

          <div className="footer-col">
            <h4>Contacto</h4>
            <a href="tel:+56994365061">+56 9 9436 5061</a>
            <a href="tel:+56982590440">+56 9 8259 0440</a>
            <a href="mailto:contacto@novusglass.cl">
              contacto@novusglass.cl
            </a>
            <span>Lautaro 2102, Quilicura, Santiago, RM</span>
          </div>
        </div>

        <div className="section-inner footer-bottom">
          <span>© NOVUS Glass Chile. Todos los derechos reservados.</span>
          <a href="https://www.novusglass.cl" target="_blank" rel="noreferrer">
            www.novusglass.cl
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;