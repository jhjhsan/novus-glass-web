import { useState } from "react";
import {
  Building2,
  Sparkles,
  ShieldCheck,
  Wrench,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Factory,
  Hotel,
  Store,
  Home,
  Construction,
  Layers,
  Droplets,
  Eraser,
  ScanSearch,
} from "lucide-react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import novusLogo from "./assets/novus-logo-transparent.png";
import vidrioAntes from "./assets/vidrio-rayado-antes.png";
import vidrioDespues from "./assets/vidrio-restaurado-despues.png";
import "./index.css";

const whatsappNumber = "56994365061";

const services = [
  {
    icon: <Eraser />,
    title: "Eliminación de rayas",
    text: "Recuperación técnica de cristales rayados en ventanales, fachadas, vitrinas y espacios interiores.",
  },
  {
    icon: <Sparkles />,
    title: "Restauración de grafitis",
    text: "Tratamiento especializado para daños por vandalismo, marcas superficiales y grabados en vidrio.",
  },
  {
    icon: <ScanSearch />,
    title: "Daños por ácido",
    text: "Evaluación y restauración de cristales afectados por químicos, ácidos o marcas permanentes.",
  },
  {
    icon: <Droplets />,
    title: "Sarro y minerales",
    text: "Limpieza técnica de depósitos minerales, manchas de agua dura y opacidad en superficies de vidrio.",
  },
  {
    icon: <Layers />,
    title: "Termopaneles",
    text: "Restauración exterior de termopaneles, vidrios templados y laminados sin reemplazo completo.",
  },
  {
    icon: <Building2 />,
    title: "Fachadas y vitrinas",
    text: "Recuperación de cristales de alto valor en edificios, locales comerciales, retail y oficinas.",
  },
];

const benefits = [
  "Ahorro frente al reemplazo",
  "Menor tiempo de respuesta",
  "Servicio en terreno",
  "Tecnología avanzada",
  "Técnicos especializados",
  "Acabado profesional",
  "Menor impacto ambiental",
  "Ideal para cristales de alto valor",
  "Menos logística y desmontaje",
];

const clients = [
  { icon: <Construction />, label: "Constructoras" },
  { icon: <Building2 />, label: "Inmobiliarias" },
  { icon: <Factory />, label: "Administradores" },
  { icon: <Store />, label: "Retail" },
  { icon: <Hotel />, label: "Hoteles" },
  { icon: <Home />, label: "Casas y departamentos" },
];

const steps = [
  "Solicitud de evaluación",
  "Diagnóstico técnico del daño",
  "Cotización",
  "Restauración en terreno",
  "Revisión final y entrega",
];

function App() {
  const [comparePosition, setComparePosition] = useState(42);

  return (
    <main className="site">
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-button"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>

      <header className="nav">
        <div className="logo">
          <img src={novusLogo} alt="NOVUS Glass" />
        </div>

        <nav className="nav-links">
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#beneficios">Beneficios</a>
          <a href="#proceso">Proceso</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="eyebrow">Restauración técnica de cristales</div>

          <h1>
            Restauración técnica de vidrios para edificios, empresas y espacios
            comerciales
          </h1>

          <p>
            Recuperamos cristales dañados por rayas, grafitis, ácidos y sarro,
            evitando el alto costo del reemplazo.
          </p>

          <div className="hero-actions">
            <a href="#contacto" className="primary-btn">
              Solicitar cotización <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </section>

      <section className="section problem">
        <div className="section-grid">
          <motion.div
            className="section-text"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="tag">El problema</span>
            <h2>
              Cuando un vidrio se daña, reemplazarlo no siempre es la mejor
              opción
            </h2>
            <p>
              Las rayas, grafitis, manchas minerales, grabados con ácido y daños
              en cristales pueden afectar la imagen, seguridad y valor de una
              propiedad. Cambiar el vidrio completo implica altos costos, tiempos
              de espera, logística, desmontaje e instalación.
            </p>
          </motion.div>

          <div className="damage-panel">
            {["Rayas", "Grafitis", "Ácido", "Sarro", "Manchas minerales"].map(
              (item) => (
                <div className="damage-card" key={item}>
                  <CheckCircle2 size={18} />
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="section solution">
        <div className="premium-card large">
          <span className="tag">La solución</span>
          <h2>
            Restauramos el vidrio. Reducimos costos. Recuperamos la
            transparencia.
          </h2>
          <p>
            Nuestro sistema de restauración técnica permite devolver claridad,
            brillo e integridad visual a superficies de vidrio de alto valor,
            trabajando directamente en terreno y reduciendo tiempos frente al
            reemplazo tradicional.
          </p>

          <div className="stats">
            <div>
              <strong>En terreno</strong>
              <span>Sin retirar el cristal</span>
            </div>
            <div>
              <strong>Menos costo</strong>
              <span>Alternativa al reemplazo</span>
            </div>
            <div>
              <strong>Alta precisión</strong>
              <span>Resultado profesional</span>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="section">
        <div className="section-heading">
          <span className="tag">Servicios</span>
          <h2>Especialistas en restauración técnica de vidrios</h2>
          <p>
            Soluciones para ventanales, fachadas, vitrinas, termopaneles, shower
            doors, oficinas, comercio y proyectos inmobiliarios.
          </p>
        </div>

        <div className="cards-grid">
          {services.map((service) => (
            <motion.article
              className="service-card"
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="icon-box">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section clients">
        <div className="section-heading">
          <span className="tag">Clientes objetivo</span>
          <h2>
            Soluciones para proyectos residenciales, comerciales e industriales
          </h2>
        </div>

        <div className="client-grid">
          {clients.map((client) => (
            <div className="client-card" key={client.label}>
              {client.icon}
              <span>{client.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="beneficios" className="section">
        <div className="section-heading">
          <span className="tag">Beneficios</span>
          <h2>Una alternativa inteligente al reemplazo de vidrios</h2>
        </div>

        <div className="benefit-grid">
          {benefits.map((benefit) => (
            <div className="benefit-card" key={benefit}>
              <ShieldCheck size={20} />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="proceso" className="section process">
        <div className="section-heading">
          <span className="tag">Proceso</span>
          <h2>Un proceso técnico, claro y eficiente</h2>
        </div>

        <div className="timeline">
          {steps.map((step, index) => (
            <div className="timeline-item" key={step}>
              <div className="timeline-number">{index + 1}</div>
              <h3>{step}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="before-after-section">
        <div className="before-after-wrapper">
          <div className="before-after-copy">
            <span className="tag">Antes y después</span>
            <h2>Recupera la transparencia sin reemplazar el vidrio completo</h2>
            <p>
              Mueve la línea para comparar un cristal comercial deteriorado por
              rayas, suciedad mineral y desgaste, frente a una superficie
              restaurada con acabado limpio, claro y profesional.
            </p>
          </div>

          <div className="glass-compare">
        <div className="glass-compare-clean">
  <img src={vidrioDespues} alt="Vidrio comercial restaurado" />
</div>

<div
  className="glass-compare-damaged"
  style={{ width: `${comparePosition}%` }}
>
  <img src={vidrioAntes} alt="Vidrio comercial dañado" />
</div>

            <div
              className="glass-compare-line"
              style={{ left: `${comparePosition}%` }}
            >
              <div className="glass-compare-handle">↔</div>
            </div>

            <div className="glass-label glass-label-left">Antes</div>
            <div className="glass-label glass-label-right">Después</div>

            <input
              type="range"
              min="10"
              max="90"
              value={comparePosition}
              onChange={(e) => setComparePosition(Number(e.target.value))}
              className="glass-compare-range"
              aria-label="Comparación antes y después"
            />
          </div>
        </div>
      </section>

      <section className="section trust">
        <div className="premium-card">
          <Wrench size={36} />
          <h2>Experiencia, tecnología y precisión al servicio del vidrio</h2>
          <p>
            Con años de experiencia en restauración de cristales y tecnología
            especializada, NOVUS Glass entrega soluciones profesionales para
            clientes exigentes, constructoras y espacios donde la imagen y la
            calidad del vidrio son fundamentales.
          </p>
          <strong>“Convertimos problemas en soluciones invisibles.”</strong>
        </div>
      </section>

      <section id="contacto" className="section contact">
        <div className="contact-info">
          <span className="tag">Contacto</span>
          <h2>Solicita una evaluación técnica</h2>
          <p>
            Cuéntanos qué tipo de vidrio necesitas restaurar y nuestro equipo te
            contactará para evaluar el proyecto.
          </p>

          <div className="contact-list">
            <div>
              <Phone size={20} />
              <span>+56 9 9436 5061 / +56 9 8259 0440</span>
            </div>
            <div>
              <Mail size={20} />
              <span>contacto@novusglass.cl</span>
            </div>
            <div>
              <MapPin size={20} />
              <span>Lautaro 2102, Quilicura, Santiago, RM</span>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Empresa" />
          <input type="tel" placeholder="Teléfono" />
          <input type="email" placeholder="Email" />
          <select>
            <option>Tipo de proyecto</option>
            <option>Edificio / Comunidad</option>
            <option>Constructora / Inmobiliaria</option>
            <option>Local comercial / Retail</option>
            <option>Casa / Departamento</option>
            <option>Otro</option>
          </select>
          <textarea placeholder="Mensaje" rows="5" />
          <button type="submit">Solicitar cotización</button>
        </form>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <img src={novusLogo} alt="NOVUS Glass" />
          <p>Restauración técnica de vidrios y cristales.</p>
        </div>

        <div className="footer-info">
          <span>www.novusglass.cl</span>
          <span>contacto@novusglass.cl</span>
        </div>
      </footer>
    </main>
  );
}

export default App;