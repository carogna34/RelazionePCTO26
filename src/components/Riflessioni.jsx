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

export default function Riflessioni() {
  return (
    <section id="riflessioni" className="py-28 md:py-40 bg-elevated">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20">
          <div className="lg:col-span-5">
            <ScrollReveal>
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-5">
                Valutazione personale
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight leading-[1.05] text-text-primary">
                Cosa porto con me
              </h2>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <ScrollReveal delay={0.15}>
              <blockquote className="relative pl-6 border-l-2 border-accent">
                <p className="text-xl md:text-2xl text-text-primary font-medium leading-relaxed">
                  &quot;Il futuro non si aspetta, si costruisce con competenza, curiosita e voglia di
                  mettersi in gioco.&quot;
                </p>
              </blockquote>
            </ScrollReveal>
          </div>
        </div>

        {/* Cards — varied rhythm, asymmetric widths */}
        <div className="space-y-6">
          <ScrollReveal>
            <div className="bg-surface rounded-[2.5rem] p-8 md:p-12 border border-slate-200/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] max-w-4xl">
              <h3 className="text-2xl font-serif font-normal text-text-primary tracking-tight mb-4">
                Impatto sull&apos;orientamento
              </h3>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                Prima di questo PCTO avevo un&apos;idea teorica del mondo tech. Dopo cinque giorni in
                un ambiente professionale reale — tra server rack, AI e presentazioni corporate — ho
                capito che il percorso informatico scelto e quello giusto. La combinazione di{' '}
                <strong className="text-text-primary">tecnologia avanzata</strong>,{' '}
                <strong className="text-text-primary">dinamica di squadra</strong> e{' '}
                <strong className="text-text-primary">visione strategica</strong> e esattamente cio
                che cerco per il mio futuro.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:ml-auto lg:max-w-5xl">
            <ScrollReveal delay={0.1}>
              <div className="bg-surface rounded-[2.5rem] p-8 md:p-10 border border-slate-200/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] h-full">
                <h3 className="text-xl font-serif font-normal text-text-primary tracking-tight mb-4">
                  Crescita personale
                </h3>
                <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                  Ho imparato a stare in un team multidisciplinare, a gestire tempi stretti e a
                  presentare il mio lavoro con chiarezza. La visita al Politecnico di Bari mi ha dato
                  uno stimolo ulteriore: vedere da vicino dove posso arrivare con studio e impegno.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-surface rounded-[2.5rem] p-8 md:p-10 border border-slate-200/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] h-full">
                <h3 className="text-xl font-serif font-normal text-text-primary tracking-tight mb-4">
                  Cosa mi ha colpito
                </h3>
                <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                  La cultura aziendale di Deloitte: giovane, inclusiva, spinta all&apos;innovazione ma
                  ancorata a standard professionali eccellenti. Avere tutor disponibili e appassionati
                  come Francesco Diamante ha fatto la differenza.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.25}>
            <div className="bg-surface rounded-[2.5rem] p-8 md:p-12 border border-slate-200/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] max-w-4xl lg:mx-auto">
              <h3 className="text-2xl font-serif font-normal text-text-primary tracking-tight mb-4">
                Ringraziamenti
              </h3>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                Un sentito ringraziamento a <strong className="text-text-primary">Deloitte Italia</strong> e
                a tutto il team del NextHub Bari. Grazie al tutor aziendale{' '}
                <strong className="text-text-primary">Francesco Diamante</strong> per la pazienza e
                la guida. Grazie alla scuola IISS &quot;Ferraris&quot; e al referente PCTO. E grazie
                ai compagni di squadra: insieme abbiamo dimostrato che la collaborazione genuina
                genera risultati concreti.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
