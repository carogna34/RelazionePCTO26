import { motion } from 'framer-motion';

function ScrollReveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const ors = [
  { code: 'OR1', title: 'xTech NextHub', desc: 'AI, GenAI, cybersecurity e trasformazione digitale.' },
  { code: 'OR2', title: 'Food & Agritech', desc: 'Tracciabilita blockchain e innovazione agroalimentare.' },
  { code: 'OR3', title: 'Health & Biotech', desc: 'Tecnologie per la salute e ricerca applicata.' },
  { code: 'OR4', title: 'Infrastructure', desc: 'Smart cities, digital twin e gestione infrastrutturale.' },
  { code: 'OR5', title: 'Smart Manufacturing', desc: 'Industria 4.0, IoT e ottimizzazione processi.' },
];

export default function Percorso() {
  return (
    <section id="percorso" className="py-28 md:py-40 bg-elevated">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left sticky info */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <ScrollReveal>
                <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-5">
                  Il programma
                </p>
                <h2 className="text-4xl md:text-5xl font-serif font-normal tracking-tight leading-[1.05] text-text-primary mb-6">
                  &quot;A scuola con noi&quot;
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="text-lg text-text-secondary leading-relaxed mb-8">
                  Percorso PCTO di Deloitte NextHub in collaborazione con il Politecnico di Bari.
                  Cinque giorni intensivi di innovazione, tecnologia e orientamento.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-4 bg-surface rounded-2xl border border-slate-200/50">
                    <span className="font-mono text-xs text-text-tertiary uppercase">Data</span>
                    <span className="text-base font-medium text-text-primary">III sett. Marzo 2026</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-surface rounded-2xl border border-slate-200/50">
                    <span className="font-mono text-xs text-text-tertiary uppercase">Sede</span>
                    <span className="text-base font-medium text-text-primary">NextHub + PoliBA</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-surface rounded-2xl border border-slate-200/50">
                    <span className="font-mono text-xs text-text-tertiary uppercase">Tutor</span>
                    <span className="text-base font-medium text-text-primary">Francesco Diamante</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Bento ORs */}
          <div className="lg:col-span-8">
            <ScrollReveal>
              <h3 className="text-xl font-semibold text-text-primary mb-6 tracking-tight">
                Cinque aree operative
              </h3>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ors.map((or, i) => (
                <ScrollReveal key={or.code} delay={0.08 * i}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className={`group h-full bg-surface rounded-[2.5rem] p-8 border border-slate-200/50
                               hover:border-accent/20 hover:shadow-[0_20px_40px_-15px_rgba(5,150,105,0.08)] transition-all
                               ${i === 0 ? 'md:col-span-2' : ''}`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-muted text-text-primary font-bold text-lg group-hover:bg-accent group-hover:text-white transition-colors">
                        {or.code}
                      </span>
                      <span className="font-mono text-xs text-text-tertiary opacity-0 group-hover:opacity-100 transition-opacity">
                        0{i + 1}
                      </span>
                    </div>
                    <h4 className="text-xl font-serif font-normal text-text-primary tracking-tight mb-2">
                      {or.title}
                    </h4>
                    <p className="text-base text-text-secondary leading-relaxed">{or.desc}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
