import { motion } from 'motion/react';
import { Target, Eye, Award } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants.ts';

export default function AboutUs() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-[var(--color-brand-primary)] font-bold uppercase tracking-widest text-xs bg-blue-50 px-4 py-2 rounded-lg border border-blue-100">Our Story</span>
          <h1 className="text-5xl md:text-6xl mt-6 mb-8 text-[var(--color-brand-primary)]">Building a Stronger <span className="italic">Rural India</span></h1>
          <p className="text-xl text-[var(--color-text-muted)] max-w-3xl mx-auto leading-relaxed">
            {COMPANY_DETAILS.name} was founded on the belief that financial opportunity shouldn&apos;t be limited by geography. We are here to empower the backbone of India - its rural entrepreneurs and families.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <img
              src="https://picsum.photos/seed/rural-growth/800/1000"
              alt="Rural Growth"
              className="rounded-3xl shadow-xl border border-[var(--color-border-subtle)]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 bg-[var(--color-brand-primary)] text-white p-8 rounded-xl shadow-2xl hidden lg:block">
              <div className="text-3xl font-bold mb-1 tracking-tighter">12+ YEARS</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">Empowerment Advocacy</div>
            </div>
          </div>
          
          <div className="space-y-10">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-white shadow-sm rounded-lg flex items-center justify-center text-[var(--color-brand-primary)] border border-[var(--color-border-subtle)]">
                <Target size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-[var(--color-text-main)]">Our Mission</h3>
                <p className="text-[var(--color-text-muted)] text-base leading-relaxed">
                  To provide simple, accessible, and transparent financial solutions to underserved rural communities, enabling them to build sustainable livelihoods and beautiful homes.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-white shadow-sm rounded-lg flex items-center justify-center text-[var(--color-brand-primary)] border border-[var(--color-border-subtle)]">
                <Eye size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-[var(--color-text-main)]">Our Vision</h3>
                <p className="text-[var(--color-text-muted)] text-base leading-relaxed">
                  Achieving 100% financial inclusion across rural India where every entrepreneur has the capital to grow and every family has a roof over their head.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
