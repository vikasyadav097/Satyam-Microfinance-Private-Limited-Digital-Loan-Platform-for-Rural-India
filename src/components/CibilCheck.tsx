import { motion } from 'motion/react';
import { ShieldCheck, TrendingUp, CreditCard, ChevronRight, Check } from 'lucide-react';
import { useState } from 'react';

export default function CibilCheck() {
  const [isProcessing, setIsProcessing] = useState(false);

  const features = [
    'Instant Detailed Credit Report',
    'Personalized Loan Availability Check',
    'Understand your Eligibility Range',
    'Improvement Tips for low scores',
    '100% Secure & RBI Guidelines compliant'
  ];

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-6">
              <TrendingUp size={18} />
              Featured Financial Tool
            </div>
            <h1 className="text-5xl mb-6">Check Your <span className="text-blue-600">Credit Health</span> Before Applying</h1>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-lg">
              Knowing your CIBIL score helps you understand your loan eligibility and negotiating power. Get an instant report today for a nominal fee.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((item, id) => (
                <li key={id} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="bg-emerald-100 text-emerald-600 p-1 rounded-full">
                    <Check size={16} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-white p-8 rounded-xl border border-[var(--color-border-subtle)] shadow-sm flex items-center justify-between">
              <div>
                <div className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest mb-1">Service Fee</div>
                <div className="text-4xl font-bold text-[var(--color-text-main)]">₹399 <span className="text-base font-medium text-[var(--color-text-muted)]">incl. GST</span></div>
              </div>
              <ShieldCheck className="text-slate-100" size={64} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-10 rounded-2xl border border-[var(--color-border-subtle)] shadow-xl relative"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[var(--color-brand-primary)] text-white px-6 py-2 rounded-lg text-sm font-bold shadow-lg">
              Secure Payment Gateway
            </div>

            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Details for Report</h3>
                <p className="text-[var(--color-text-muted)] text-sm">Your data is encrypted and secure</p>
              </div>

              <div className="grid gap-6">
                <div>
                  <label className="block text-sm font-bold text-[var(--color-text-main)] mb-2 uppercase tracking-wide">PAN Number</label>
                  <input
                    type="text"
                    placeholder="ABCDE1234F"
                    className="w-full bg-slate-50 border border-[var(--color-border-subtle)] p-4 rounded-xl focus:ring-2 focus:ring-[var(--color-brand-primary)] outline-none transition-all uppercase font-mono"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[var(--color-text-main)] mb-2 uppercase tracking-wide">Mobile Number</label>
                  <input
                    type="tel"
                    placeholder="+91"
                    className="w-full bg-slate-50 border border-[var(--color-border-subtle)] p-4 rounded-xl focus:ring-2 focus:ring-[var(--color-brand-primary)] outline-none transition-all"
                  />
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => setIsProcessing(true)}
                  disabled={isProcessing}
                  className="btn-clean-primary w-full text-lg !py-5"
                >
                  <CreditCard className="inline mr-2" size={24} />
                  {isProcessing ? 'Redirecting to Gateway...' : 'Pay ₹399 & Get Report'}
                </button>
              </div>

              <div className="flex items-center justify-center gap-6 mt-8 opacity-40 grayscale">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" alt="Apple Pay" className="h-6" referrerPolicy="no-referrer" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" referrerPolicy="no-referrer" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-8" referrerPolicy="no-referrer" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
