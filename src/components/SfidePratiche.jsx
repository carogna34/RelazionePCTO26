import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  Brain, ChartBar, FileText, Scan,
  ArrowRight, Globe, Database, TrendUp,
  FilePdf,
} from '@phosphor-icons/react';
import Lightbox from './Lightbox';

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

function ClickableImage({ src, alt, className, onClick }) {
  return (
    <img
      src={src}
      alt={alt}
      onClick={() => onClick(src, alt)}
      className={`w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-zoom-in ${className}`}
      loading="lazy"
    />
  );
}

/* ─── Project 1: EndoSignal ─── */
function EndoSignalBlock({ onImageClick }) {
  return (
    <div className="mb-32 md:mb-48">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        <ScrollReveal className="lg:col-span-7 relative">
          <div className="space-y-4">
            <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-slate-200/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)]">
              <ClickableImage src="/images/dashboard-medico-endosignal.png" alt="Dashboard medico EndoSignal" onClick={onImageClick} />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="aspect-square rounded-2xl overflow-hidden border border-slate-200/50">
                <ClickableImage src="/images/applicativo-mobile-endosignal.png" alt="App mobile EndoSignal" onClick={onImageClick} />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden border border-slate-200/50">
                <ClickableImage src="/images/come-funziona-endosignal.png" alt="Come funziona EndoSignal" onClick={onImageClick} />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden border border-slate-200/50">
                <ClickableImage src="/images/endosignal-roadmap.png" alt="Roadmap EndoSignal" onClick={onImageClick} />
              </div>
            </div>
          </div>

        </ScrollReveal>

        <ScrollReveal delay={0.15} className="lg:col-span-5 lg:pt-8">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent block mb-4">Progetto 01</span>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight leading-[0.95] text-text-primary mb-4">
            EndoSignal
          </h3>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8">
            Predizione intelligente degli squilibri ormonali tramite correlazione dati paziente-medico.
          </p>

          <div className="space-y-6 mb-10">
            <div className="relative pl-5 border-l-2 border-red-200">
              <p className="text-xs font-bold tracking-wider uppercase text-red-400 mb-1">Il Problema</p>
              <p className="text-base text-text-secondary leading-relaxed">
                I disturbi ormonali vengono spesso diagnosticati tardivamente. I pazienti non tracciano
                i sintomi e i medici non hanno strumenti predittivi per correlare sensazioni con dati oggettivi.
              </p>
            </div>
            <div className="relative pl-5 border-l-2 border-accent">
              <p className="text-xs font-bold tracking-wider uppercase text-accent mb-1">La Soluzione</p>
              <p className="text-base text-text-secondary leading-relaxed">
                Applicativo che raccoglie <strong className="text-text-primary">input giornalieri del paziente</strong>{' '}
                e li incrocia con <strong className="text-text-primary">quadri ormonali storici</strong> del medico.
                Un motore AI identifica pattern e predice squilibri prima che emergano.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              { icon: Brain, label: 'ML Predictive' },
              { icon: ChartBar, label: 'Data Fusion' },
              { icon: FileText, label: 'Log Giornaliero' },
              { icon: Scan, label: 'Correlazioni' },
            ].map((f, i) => (
              <span key={i} className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm text-text-secondary border border-slate-200/50">
                <f.icon size={16} weight="duotone" className="text-accent" />
                {f.label}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

/* ─── Project 2: MacroPlateAI ─── */
function MacroPlateBlock({ onImageClick }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <div ref={ref} className="mb-32 md:mb-48">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        <ScrollReveal delay={0.1} className="lg:col-span-5 order-2 lg:order-1 lg:pr-8">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent block mb-4">Progetto 02</span>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight leading-[0.95] text-text-primary mb-4">
            MacroPlate AI
          </h3>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8">
            Nutrizione intelligente che sfrutta OCR e automazione per eliminare l&apos;input manuale.
          </p>

          <div className="space-y-6 mb-10">
            <div className="relative pl-5 border-l-2 border-red-200">
              <p className="text-xs font-bold tracking-wider uppercase text-red-400 mb-1">Il Problema</p>
              <p className="text-base text-text-secondary leading-relaxed">
                Tracciare calorie e macro-nutrienti e faticoso: input manuale noioso e soggetto a errori.
                Le app esistenti non sfruttano l&apos;AI per automatizzare il riconoscimento.
              </p>
            </div>
            <div className="relative pl-5 border-l-2 border-accent">
              <p className="text-xs font-bold tracking-wider uppercase text-accent mb-1">La Soluzione</p>
              <p className="text-base text-text-secondary leading-relaxed">
                Flusso <strong className="text-text-primary">OCR + AI</strong> che scansiona etichette e menù,
                estrae dati nutrizionali e li inserisce in un diario personale. Il sistema apprende le abitudini
                e suggerisce correzioni in tempo reale.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            {[
              { icon: Scan, label: 'OCR Engine' },
              { icon: Brain, label: 'NLP Parser' },
              { icon: ChartBar, label: 'Dashboard' },
              { icon: ArrowRight, label: 'Auto-fill' },
            ].map((f, i) => (
              <span key={i} className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm text-text-secondary border border-slate-200/50">
                <f.icon size={16} weight="duotone" className="text-accent" />
                {f.label}
              </span>
            ))}
          </div>

          <a
            href="/images/pdfstrategiadimarketingmacroplateai.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-dark transition-colors font-medium"
          >
            <FilePdf size={18} weight="duotone" />
            Scarica strategia di marketing (PDF)
          </a>
        </ScrollReveal>

        <ScrollReveal className="lg:col-span-7 order-1 lg:order-2">
          <motion.div style={{ y }} className="space-y-4">
            <div className="aspect-video rounded-[2.5rem] overflow-hidden border border-slate-200/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] bg-muted">
              <video
                src="/images/funzionamento-macroplateai.webm"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[21/9] rounded-2xl overflow-hidden border border-slate-200/50">
              <ClickableImage src="/images/macroplateai.png" alt="MacroPlateAI screenshot" onClick={onImageClick} />
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </div>
  );
}

/* ─── Project 3: AgriData ─── */
function AgriDataBlock({ onImageClick }) {
  return (
    <div className="mb-16">
      <ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-12">
          {/* Images — left on desktop, first on mobile */}
          <div className="lg:col-span-8 order-1">
            <div className="grid grid-cols-12 auto-rows-[120px] md:auto-rows-[150px] gap-3">
              <div className="col-span-7 row-span-2 rounded-[2rem] overflow-hidden border border-slate-200/50">
                <ClickableImage src="/images/agritechrichieste.png" alt="AgriData richieste" onClick={onImageClick} />
              </div>
              <div className="col-span-5 row-span-1 rounded-[2rem] overflow-hidden border border-slate-200/50">
                <ClickableImage src="/images/agritech3schermata.png" alt="AgriData schermata" onClick={onImageClick} />
              </div>
              <div className="col-span-5 row-span-1 rounded-[2rem] overflow-hidden border border-slate-200/50">
                <ClickableImage src="/images/agritechanalytics.png" alt="AgriData analytics" onClick={onImageClick} />
              </div>
              <div className="col-span-12 row-span-2 rounded-[2rem] overflow-hidden border border-slate-200/50">
                <ClickableImage src="/images/agritech2foto.png" alt="AgriData campo" onClick={onImageClick} />
              </div>
            </div>
          </div>

          {/* Text — right on desktop, after images on mobile */}
          <div className="lg:col-span-4 order-2 lg:pl-4">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent block mb-4">Progetto 03</span>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight leading-[0.95] text-text-primary mb-4">
              AgriData
            </h3>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8">
              Digitalizzazione intelligente dei dati agricoli cartacei tramite OCR e AI per tracciabilità e analytics.
            </p>

            <div className="space-y-6">
              <div className="relative pl-5 border-l-2 border-red-200">
                <p className="text-xs font-bold tracking-wider uppercase text-red-400 mb-1">Il Problema</p>
                <p className="text-base text-text-secondary leading-relaxed">
                  Report agricoli e dati di tracciabilità rimangono bloccati su documenti cartacei.
                  Estrarre informazioni manualmente e lento, impreciso e inutilizzabile per analytics predittive.
                </p>
              </div>
              <div className="relative pl-5 border-l-2 border-accent">
                <p className="text-xs font-bold tracking-wider uppercase text-accent mb-1">La Soluzione</p>
                <p className="text-base text-text-secondary leading-relaxed">
                  Pipeline <strong className="text-text-primary">OCR + NLP</strong> che digitalizza report cartacei,
                  estrae dati strutturati su colture, raccolti e filiere, e li incrocia con dataset open per
                  analytics e certificazione blockchain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}

export default function SfidePratiche() {
  return (
    <Lightbox>
      {(openLightbox) => (
        <section id="sfide" className="py-28 md:py-40 bg-elevated overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            {/* Header */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-end mb-20 md:mb-32">
              <div className="lg:col-span-6">
                <ScrollReveal>
                  <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-5">
                    Sfide Pratiche
                  </p>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight leading-[0.95] text-text-primary">
                    Hands-on: dalla teoria al prototipo
                  </h2>
                </ScrollReveal>
              </div>
              <div className="lg:col-span-5 lg:col-start-8">
                <ScrollReveal delay={0.15}>
                  <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                    Challenge reali affrontate in squadra. Ogni progetto segue il ciclo completo:
                    identificazione del problema, ideazione della soluzione, prototipazione e pitch.
                  </p>
                </ScrollReveal>
              </div>
            </div>

            <EndoSignalBlock onImageClick={openLightbox} />
            <MacroPlateBlock onImageClick={openLightbox} />
            <AgriDataBlock onImageClick={openLightbox} />
          </div>
        </section>
      )}
    </Lightbox>
  );
}
