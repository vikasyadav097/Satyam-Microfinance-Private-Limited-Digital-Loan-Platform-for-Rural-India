import { motion } from 'motion/react';
import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle, Send } from 'lucide-react';
import { LOAN_TYPES } from '../constants.ts';

export default function ApplicationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    loanType: '',
    amount: '',
    location: '',
    occupation: ''
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep(); // Move to success step
  };

  const steps = [
    { id: 1, title: 'Identity' },
    { id: 2, title: 'Loan Details' },
    { id: 3, title: 'Occupation' }
  ];

  if (step === 4) {
    return (
      <div className="pt-40 pb-20 text-center px-4">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md mx-auto bg-white p-12 rounded-2xl shadow-xl border border-[var(--color-border-subtle)]"
        >
          <div className="w-16 h-16 bg-[#ECFDF5] text-[var(--color-accent)] rounded-lg flex items-center justify-center mx-auto mb-8 font-bold text-2xl">
            ✓
          </div>
          <h2 className="text-3xl font-bold mb-4 text-[var(--color-brand-primary)] uppercase tracking-tighter">Application Submitted!</h2>
          <p className="text-[var(--color-text-muted)] mb-8 leading-relaxed">
            Thank you, {formData.fullName}. Our relationship officer will contact you on <span className="font-bold text-[var(--color-brand-primary)]">{formData.mobile}</span> within 24 hours to proceed with documentation.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="btn-clean-primary w-full"
          >
            Done
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 min-h-screen bg-[var(--color-bg-main)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl mb-4 text-[var(--color-brand-primary)]">Start Your <span className="italic tracking-tighter">Loan Journey</span></h1>
          <p className="text-[var(--color-text-muted)]">Fill in your details and get an eligibility check in minutes.</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12 flex justify-between items-center relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -z-10 -translate-y-1/2 rounded-full" />
          <div 
            className="absolute top-1/2 left-0 h-0.5 bg-[var(--color-brand-primary)] -z-10 -translate-y-1/2 rounded-full transition-all duration-500"
            style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
          />
          {steps.map((s) => (
            <div key={s.id} className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded flex items-center justify-center font-bold transition-all duration-300 text-sm ${
                  step >= s.id ? 'bg-[var(--color-brand-primary)] text-white' : 'bg-white text-slate-300 border border-slate-200'
                }`}
              >
                {s.id}
              </div>
            </div>
          ))}
        </div>

        <motion.div
          key={step}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-[var(--color-border-subtle)]"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <div className="grid gap-6">
                <div>
                  <label className="block text-xs font-bold text-[var(--color-text-main)] mb-2 uppercase tracking-widest">Full Name (As per Aadhar)</label>
                  <input
                    required
                    type="text"
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full bg-slate-50 border border-[var(--color-border-subtle)] p-4 rounded-lg outline-none focus:ring-1 focus:ring-[var(--color-brand-primary)] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[var(--color-text-main)] mb-2 uppercase tracking-widest">Mobile Number</label>
                  <input
                    required
                    type="tel"
                    value={formData.mobile}
                    onChange={e => setFormData({ ...formData, mobile: e.target.value })}
                    placeholder="+91 Mobile number"
                    className="w-full bg-slate-50 border border-[var(--color-border-subtle)] p-4 rounded-lg outline-none focus:ring-1 focus:ring-[var(--color-brand-primary)] transition-all"
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="grid gap-6">
                <div>
                  <label className="block text-xs font-bold text-[var(--color-text-main)] mb-2 uppercase tracking-widest">Loan Type</label>
                  <select
                    required
                    value={formData.loanType}
                    onChange={e => setFormData({ ...formData, loanType: e.target.value })}
                    className="w-full bg-slate-50 border border-[var(--color-border-subtle)] p-4 rounded-lg outline-none focus:ring-1 focus:ring-[var(--color-brand-primary)] transition-all"
                  >
                    <option value="">Select loan category</option>
                    {LOAN_TYPES.map(type => (
                      <option key={type.id} value={type.id}>{type.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[var(--color-text-main)] mb-2 uppercase tracking-widest">Approximate Amount (₹)</label>
                  <input
                    required
                    type="number"
                    value={formData.amount}
                    onChange={e => setFormData({ ...formData, amount: e.target.value })}
                    placeholder="e.g. 200000"
                    className="w-full bg-slate-50 border border-[var(--color-border-subtle)] p-4 rounded-lg outline-none focus:ring-1 focus:ring-[var(--color-brand-primary)] transition-all"
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="grid gap-6">
                <div>
                  <label className="block text-xs font-bold text-[var(--color-text-main)] mb-2 uppercase tracking-widest">Location</label>
                  <input
                    required
                    type="text"
                    value={formData.location}
                    onChange={e => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Enter your location"
                    className="w-full bg-slate-50 border border-[var(--color-border-subtle)] p-4 rounded-lg outline-none focus:ring-1 focus:ring-[var(--color-brand-primary)] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[var(--color-text-main)] mb-2 uppercase tracking-widest">Current Occupation</label>
                  <input
                    required
                    type="text"
                    value={formData.occupation}
                    onChange={e => setFormData({ ...formData, occupation: e.target.value })}
                    placeholder="e.g. Farmer, Shop Owner, etc."
                    className="w-full bg-slate-50 border border-[var(--color-border-subtle)] p-4 rounded-lg outline-none focus:ring-1 focus:ring-[var(--color-brand-primary)] transition-all"
                  />
                </div>
              </div>
            )}

            <div className="flex justify-between pt-6">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center gap-1 text-slate-400 font-bold px-4 py-2 hover:text-[var(--color-text-main)] transition-all text-xs uppercase tracking-widest"
                >
                  <ChevronLeft size={16} /> Back
                </button>
              ) : <div />}
              
              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="btn-clean-primary"
                >
                  Next <ChevronRight size={20} className="inline ml-1" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn-clean-primary px-10"
                >
                  Submit Application <Send size={18} className="inline ml-2" />
                </button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
