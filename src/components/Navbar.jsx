import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X } from '@phosphor-icons/react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'intro', label: 'Azienda' },
  { id: 'attivita', label: 'Attivita' },
  { id: 'sfide', label: 'Sfide' },
  { id: 'competenze', label: 'Skills' },
  { id: 'orientamento', label: 'Orientamento' },
  { id: 'galleria', label: 'Galleria' },
  { id: 'riflessioni', label: 'Riflessioni' },
];

export default function Navbar() {
  const [active, setActive] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-6">
        <div
          className="flex items-center gap-1 px-2 py-2 rounded-full border border-white/20 bg-white/60 backdrop-blur-xl
                     shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_8px_32px_-8px_rgba(0,0,0,0.08)]"
        >
          <a
            href="#hero"
            className="px-4 py-2 text-sm font-semibold tracking-tight text-text-primary rounded-full hover:bg-white/60 transition-colors font-serif italic"
          >
            PCTO <span className="text-accent not-italic">26</span>
          </a>

          <div className="hidden md:flex items-center">
            {sections.slice(1).map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`relative px-4 py-2 text-sm rounded-full transition-all ${
                  active === s.id
                    ? 'text-text-primary bg-white/50'
                    : 'text-text-secondary hover:text-text-primary hover:bg-white/50'
                }`}
              >
                {s.label}
                {active === s.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-2 right-2 -bottom-0.5 h-[2px] bg-accent rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-full hover:bg-white/50 text-text-primary"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed top-20 left-0 right-0 z-40 px-6 md:hidden"
          >
            <div
              className="mx-auto max-w-sm rounded-[2rem] border border-white/20 bg-white/80 backdrop-blur-xl p-4
                         shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)]"
            >
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-xl transition-colors ${
                    active === s.id
                      ? 'text-text-primary bg-white/60 font-medium'
                      : 'text-text-secondary hover:text-text-primary hover:bg-white/60'
                  }`}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
