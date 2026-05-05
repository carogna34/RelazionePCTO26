import { motion } from 'framer-motion';

export default function SectionDivider({ label = '' }) {
  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12 md:py-16">
      <div className="flex items-center gap-6">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-slate-200 origin-left"
        />
        {label && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10px] font-semibold tracking-[0.3em] uppercase text-text-tertiary whitespace-nowrap font-mono"
          >
            {label}
          </motion.span>
        )}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="h-px flex-1 bg-gradient-to-l from-transparent via-slate-200 to-slate-200 origin-right"
        />
      </div>
    </div>
  );
}
