import { Landmark, ArrowRight, Heart } from 'lucide-react';
import { Page } from '../types.ts';
import { COMPANY_DETAILS, LOAN_TYPES } from '../constants.ts';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const trustItems = [
    { label: 'Quick Approval' },
    { label: 'Transparent Pricing' },
    { label: 'Rural Support' },
    { label: 'Minimal Paperwork' }
  ];

  return (
    <footer className="bg-white border-t border-[var(--color-border-subtle)]">
      {/* Trust Bar */}
      <div className="border-b border-[var(--color-border-subtle)] bg-white h-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 h-full flex items-center justify-around flex-wrap gap-4">
          {trustItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#ECFDF5] text-[var(--color-accent)] rounded flex items-center justify-center font-bold text-lg">
                ✓
              </div>
              <span className="text-sm font-bold text-[var(--color-text-main)] uppercase tracking-wide">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-10 pt-20 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="font-extrabold text-xl text-[var(--color-brand-primary)] tracking-tight mb-6 cursor-pointer" onClick={() => setCurrentPage('home')}>
              SATYAM MICROFINANCE
            </div>
            <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-8">
              Empowering rural India with ethical, transparent and fast credit solutions since 2012. Join our mission of financial inclusion.
            </p>
            <button
               onClick={() => setCurrentPage('apply')}
               className="btn-clean-primary !py-3 !px-6 text-sm"
            >
              Apply for Loan
            </button>
          </div>

          <div>
            <h4 className="text-[var(--color-text-main)] font-bold mb-6 uppercase text-xs tracking-widest">Loan Products</h4>
            <ul className="space-y-4">
              {LOAN_TYPES.map(loan => (
                <li key={loan.id} className="flex">
                  <button onClick={() => setCurrentPage('services')} className="text-[var(--color-text-muted)] hover:text-[var(--color-brand-primary)] transition-colors text-sm font-medium">
                    {loan.title}
                  </button>
                </li>
              ))}
              <li className="flex">
                <button onClick={() => setCurrentPage('cibil')} className="text-[var(--color-text-muted)] hover:text-[var(--color-brand-primary)] transition-colors text-sm font-medium text-left">
                  CIBIL Check Service
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[var(--color-text-main)] font-bold mb-6 uppercase text-xs tracking-widest">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Contact'].map(link => (
                <li key={link} className="flex">
                  <button onClick={() => setCurrentPage(link.toLowerCase() as Page)} className="text-[var(--color-text-muted)] hover:text-[var(--color-brand-primary)] transition-colors text-sm font-medium">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[var(--color-text-main)] font-bold mb-6 uppercase text-xs tracking-widest">Our Presence</h4>
            <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
              {COMPANY_DETAILS.address}
            </p>
            <div className="p-4 bg-[var(--color-bg-main)] rounded-lg border border-[var(--color-border-subtle)]">
              <div className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest mb-1">Support Line</div>
              <a href={`tel:${COMPANY_DETAILS.phone}`} className="text-[var(--color-brand-primary)] font-bold">{COMPANY_DETAILS.phone}</a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-[var(--color-border-subtle)] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[var(--color-text-muted)] text-[11px] uppercase tracking-[0.2em] font-bold">
            © 2026 {COMPANY_DETAILS.name}. RBI REGISTERED MFI.
          </p>
          <div className="flex items-center gap-2 text-[var(--color-text-muted)] text-xs font-medium">
            Simplified Microfinance Solutions for Rural India
          </div>
        </div>
      </div>
    </footer>
  );
}
