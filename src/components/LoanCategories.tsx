import { motion } from 'motion/react';
import { Briefcase, Home, ArrowRight, ChevronRight } from 'lucide-react';
import { LOAN_TYPES } from '../constants.ts';
import { Page } from '../types.ts';

interface LoanCategoriesProps {
  setCurrentPage: (page: Page) => void;
}

export default function LoanCategories({ setCurrentPage }: LoanCategoriesProps) {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl text-slate-900 mb-4">Financial Solutions Tailored For You</h2>
            <p className="text-slate-500 text-lg">Choose the loan that fits your dreams. Whether it&apos;s a new business or a new roof, we&apos;ve got you covered.</p>
          </div>
          <button 
            onClick={() => setCurrentPage('services')}
            className="group flex items-center gap-2 text-brand-primary font-bold hover:gap-3 transition-all"
          >
            All Services <ChevronRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {LOAN_TYPES.map((loan, idx) => (
            <motion.div
              key={loan.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 border border-[var(--color-border-subtle)] flex flex-col sm:flex-row items-center justify-between shadow-[0_4px_12px_rgba(0,0,0,0.02)] group hover:border-[var(--color-brand-primary)]/30 transition-all gap-6"
            >
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold text-[var(--color-brand-primary)]">{loan.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)]">{loan.target}</p>
              </div>
              
              <div className="text-right flex flex-col items-center sm:items-end">
                <div className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest mb-1">Max Amount</div>
                <div className="text-2xl font-black text-[var(--color-accent)]">
                  ₹{loan.maxAmount.toLocaleString()}
                </div>
                <button
                  onClick={() => setCurrentPage('apply')}
                  className="mt-4 text-xs font-bold text-[var(--color-brand-primary)] uppercase tracking-widest hover:underline flex items-center gap-1"
                >
                  Apply Now <ChevronRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
