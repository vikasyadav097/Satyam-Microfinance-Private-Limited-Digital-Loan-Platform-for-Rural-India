/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Page } from './types.ts';
import Navigation from './components/Navigation.tsx';
import Hero from './components/Hero.tsx';
import Features from './components/Features.tsx';
import LoanCategories from './components/LoanCategories.tsx';
import Footer from './components/Footer.tsx';
import CTASection from './components/CTASection.tsx';
import AboutUs from './components/AboutUs.tsx';
import CibilCheck from './components/CibilCheck.tsx';
import ApplicationForm from './components/ApplicationForm.tsx';
import Contact from './components/Contact.tsx';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_DETAILS, LOAN_TYPES } from './constants.ts';
import { Shield, ChevronRight } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Hero setCurrentPage={setCurrentPage} />
            <Features />
            <LoanCategories setCurrentPage={setCurrentPage} />
            <CTASection setCurrentPage={setCurrentPage} />
          </motion.div>
        );
      case 'about':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <AboutUs />
            <CTASection setCurrentPage={setCurrentPage} />
          </motion.div>
        );
      case 'services':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32 pb-20 bg-white"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h1 className="text-5xl mb-6">Our <span className="text-brand-primary">Loan Products</span></h1>
                <p className="text-slate-500 max-w-2xl mx-auto">Explore our range of financial products designed to uplift rural entrepreneurs and families.</p>
              </div>

              <div className="grid gap-12">
                {LOAN_TYPES.map((loan, idx) => (
                  <div key={loan.id} className={`flex flex-col lg:flex-row gap-8 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className="lg:w-1/2">
                      <img 
                        src={`https://picsum.photos/seed/${loan.id}-details/1000/600`} 
                        alt={loan.title}
                        className="rounded-[2.5rem] shadow-xl w-full object-cover aspect-[16/9]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="lg:w-1/2 p-4">
                      <h2 className="text-4xl mb-6 text-slate-900">{loan.title}</h2>
                      <p className="text-lg text-slate-500 mb-8 leading-relaxed">{loan.description}</p>
                      
                      <div className="grid sm:grid-cols-2 gap-6 mb-10">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Loan Range</div>
                          <div className="text-xl font-bold text-slate-900">₹{loan.minAmount.toLocaleString()} - ₹{loan.maxAmount.toLocaleString()}</div>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Target Audience</div>
                          <div className="text-xl font-bold text-slate-900">{loan.id === 'business' ? 'Entrepreneurs' : 'Home Owners'}</div>
                        </div>
                      </div>

                      <div className="space-y-4 mb-10">
                        <h4 className="font-bold text-slate-800">Key Benefits:</h4>
                        <ul className="grid sm:grid-cols-2 gap-3">
                          {loan.benefits.map((b, i) => (
                            <li key={i} className="flex items-center gap-2 text-slate-600">
                              <Shield size={16} className="text-emerald-500" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button 
                        onClick={() => setCurrentPage('apply')}
                        className="group flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-brand-primary/20 hover:scale-105 transition-all"
                      >
                        Apply for {loan.title} <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        );
      case 'cibil':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <CibilCheck />
          </motion.div>
        );
      case 'apply':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ApplicationForm />
          </motion.div>
        );
      case 'contact':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Contact />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>

      <Footer setCurrentPage={setCurrentPage} />
      
      {/* Floating WhatsApp for Rural Support */}
      <a 
        href={`https://wa.me/${COMPANY_DETAILS.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/></svg>
      </a>
    </div>
  );
}
