import { Page } from '../types.ts';
import { COMPANY_DETAILS } from '../constants.ts';
import { motion } from 'motion/react';

interface CTASectionProps {
  setCurrentPage: (page: Page) => void;
}

export default function CTASection({ setCurrentPage }: CTASectionProps) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[var(--color-brand-primary)] rounded-xl p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl text-white mb-8">Grow Your Business or Build Your Home Today</h2>
            <p className="text-blue-100/70 text-lg md:text-xl mb-12 leading-relaxed">
              Don&apos;t wait for your dreams. Access easy, affordable credit for your needs. Join thousands of rural entrepreneurs growing with Satyam Microfinance.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button
                onClick={() => setCurrentPage('apply')}
                className="bg-white text-[var(--color-brand-primary)] px-10 py-5 rounded-lg text-lg font-bold hover:bg-blue-50 transition-all active:scale-95"
              >
                Apply for Loan
              </button>
              <button
                onClick={() => setCurrentPage('contact')}
                className="border-2 border-white/30 text-white px-10 py-5 rounded-lg text-lg font-bold hover:bg-white/10 transition-all active:scale-95"
              >
                Talk to an Expert
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
