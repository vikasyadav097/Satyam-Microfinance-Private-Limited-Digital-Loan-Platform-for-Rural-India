import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Landmark } from 'lucide-react';
import { Page } from '../types.ts';
import { COMPANY_DETAILS } from '../constants.ts';

interface HeroProps {
  setCurrentPage: (page: Page) => void;
}

export default function Hero({ setCurrentPage }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-[var(--color-bg-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl mb-6 text-[var(--color-brand-primary)] leading-[1.1]">
              Empowering<br />Rural Dreams
            </h1>
            <p className="text-xl text-[var(--color-text-muted)] mb-10 max-w-lg leading-relaxed">
              Access loans from ₹50,000 to ₹10,00,000 with minimal documentation and support for your journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => setCurrentPage('apply')}
                className="btn-clean-primary text-lg"
              >
                Apply Now
              </button>
              <button
                onClick={() => setCurrentPage('cibil')}
                className="btn-clean-secondary text-lg"
              >
                Check Eligibility
              </button>
            </div>

            <div className="p-6 rounded-xl border border-blue-200 bg-[#EFF6FF] flex items-center gap-5">
              <div className="w-12 min-w-[48px] h-12 bg-[var(--color-brand-primary)] text-white font-bold rounded-full flex items-center justify-center">
                750
              </div>
              <div>
                <h4 className="font-bold text-[var(--color-brand-primary)]">Check Your CIBIL Score for ₹399</h4>
                <p className="text-xs text-[var(--color-text-muted)]">Instant report to help you assess your loan eligibility today.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-5 justify-center"
          >
            <div className="bg-white p-6 rounded-xl border border-[var(--color-border-subtle)] flex items-center justify-between shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
              <div>
                <h3 className="text-xl font-bold">Business Loan</h3>
                <p className="text-sm text-[var(--color-text-muted)]">For small businesses & farmers</p>
              </div>
              <div className="text-lg font-extrabold text-[var(--color-accent)] uppercase tracking-tighter">
                ₹50k – ₹3L
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-[var(--color-border-subtle)] flex items-center justify-between shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
              <div>
                <h3 className="text-xl font-bold">Home Loan</h3>
                <p className="text-sm text-[var(--color-text-muted)]">For construction & renovation</p>
              </div>
              <div className="text-lg font-extrabold text-[var(--color-accent)] uppercase tracking-tighter">
                ₹3L – ₹10L
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[var(--color-border-subtle)] flex items-center justify-between shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
              <div>
                <h3 className="text-xl font-bold">Agriculture Loan</h3>
                <p className="text-sm text-[var(--color-text-muted)]">For seeds & livestock</p>
              </div>
              <div className="text-lg font-extrabold text-[var(--color-accent)] uppercase tracking-tighter">
                UP TO ₹5L
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
