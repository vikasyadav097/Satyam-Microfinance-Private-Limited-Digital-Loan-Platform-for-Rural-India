import { motion } from 'motion/react';
import { ShieldCheck, Zap, Users, BadgePercent } from 'lucide-react';

const features = [
  {
    icon: <Zap size={32} />,
    title: 'Quick Loan Approval',
    description: 'Get your loan eligibility checked and approved within 24 hours of document submission.'
  },
  {
    icon: <Users size={32} />,
    title: 'Rural First Support',
    description: 'Dedicated officers who visit your village/town to guide you through the process.'
  },
  {
    icon: <BadgePercent size={32} />,
    title: 'Transparent Pricing',
    description: 'No hidden charges or processing fees. We believe in complete financial honesty.'
  },
  {
    icon: <ShieldCheck size={32} />,
    title: 'Trusted RBI Registered',
    description: 'A licensed microfinance institution committed to financial inclusion in rural India.'
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl mb-4 text-slate-900">Why Rural India Trusts Satyam</h2>
          <p className="text-slate-500 text-lg">We bridge the gap between financial dreams and rural reality with simple, accessible lending solutions.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl border border-[var(--color-border-subtle)] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.02)] flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-lg bg-[#ECFDF5] text-[var(--color-accent)] flex items-center justify-center mb-6 font-bold">
                ✓
              </div>
              <h3 className="text-sm font-bold mb-2 text-[var(--color-text-main)] uppercase tracking-wider">{feature.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
