import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants.ts';

export default function Contact() {
  return (
    <div className="pt-32 pb-20 bg-[var(--color-bg-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-10">
        <div className="text-center mb-16 px-4">
          <h1 className="text-5xl mb-4 text-[var(--color-brand-primary)]">We&apos;re Here to <span className="italic tracking-tighter">Support You</span></h1>
          <p className="text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto">Have questions? Reach out to our dedicated team or visit our regional office.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-10 bg-white rounded-xl border border-[var(--color-border-subtle)] shadow-sm flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-blue-50 text-[var(--color-brand-primary)] rounded-lg flex items-center justify-center mb-6">
              <Phone size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-[var(--color-text-muted)] text-sm mb-4">Questions about loans? Call our support line.</p>
            <a href={`tel:${COMPANY_DETAILS.phone}`} className="text-2xl font-black text-[var(--color-brand-primary)] tracking-tighter">
              {COMPANY_DETAILS.phone}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-10 bg-white rounded-xl border border-[var(--color-border-subtle)] shadow-sm flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-emerald-50 text-[var(--color-accent)] rounded-lg flex items-center justify-center mb-6">
              <Mail size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Email Support</h3>
            <p className="text-[var(--color-text-muted)] text-sm mb-4">We usually respond within 24 hours.</p>
            <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-lg font-bold text-[var(--color-brand-primary)] hover:underline">
              {COMPANY_DETAILS.email}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-10 bg-white rounded-xl border border-[var(--color-border-subtle)] shadow-sm flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-slate-50 text-slate-500 rounded-lg flex items-center justify-center mb-6">
              <MapPin size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Visit Office</h3>
            <p className="text-[var(--color-text-muted)] text-sm mb-4">Drop by for in-person consultation.</p>
            <address className="not-italic text-[var(--color-text-main)] text-sm font-medium leading-relaxed">
              {COMPANY_DETAILS.address}
            </address>
          </motion.div>
        </div>

        <div className="mt-20">
          <div className="bg-white rounded-2xl border border-[var(--color-border-subtle)] p-12 shadow-xl flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6">Have a Question?</h2>
              <p className="text-[var(--color-text-muted)] mb-8 leading-relaxed">
                Whether you are a first-time borrower or an existing customer, we are here to help. Fill out the form and our team will get back to you shortly.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm font-bold text-[var(--color-text-main)]">
                  <div className="w-6 h-6 bg-[#ECFDF5] text-[var(--color-accent)] rounded flex items-center justify-center">✓</div>
                  Direct Access to Credit Experts
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-[var(--color-text-main)]">
                  <div className="w-6 h-6 bg-[#ECFDF5] text-[var(--color-accent)] rounded flex items-center justify-center">✓</div>
                  Free Eligibility Consultation
                </div>
              </div>
            </div>
            
            <form className="md:w-1/2 w-full grid gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-slate-50 border border-[var(--color-border-subtle)] p-4 rounded-lg outline-none focus:ring-1 focus:ring-[var(--color-brand-primary)]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-slate-50 border border-[var(--color-border-subtle)] p-4 rounded-lg outline-none focus:ring-1 focus:ring-[var(--color-brand-primary)]"
              />
              <textarea
                placeholder="How can we help you?"
                rows={4}
                className="w-full bg-slate-50 border border-[var(--color-border-subtle)] p-4 rounded-lg outline-none focus:ring-1 focus:ring-[var(--color-brand-primary)]"
              ></textarea>
              <button className="btn-clean-primary w-full text-base">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
