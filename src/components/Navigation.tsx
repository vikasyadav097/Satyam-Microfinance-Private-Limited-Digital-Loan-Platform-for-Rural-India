import { motion } from 'motion/react';
import { Menu, X, Landmark } from 'lucide-react';
import { useState } from 'react';
import { Page } from '../types.ts';
import { COMPANY_DETAILS } from '../constants.ts';

interface NavigationProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export default function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { label: string; value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'About', value: 'about' },
    { label: 'Services', value: 'services' },
    { label: 'CIBIL Check', value: 'cibil' },
    { label: 'Contact', value: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[var(--color-border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-10">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="font-extrabold text-2xl text-[var(--color-brand-primary)] tracking-tight">
              SATYAM MICROFINANCE
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => setCurrentPage(item.value)}
                className={`text-sm font-semibold transition-colors hover:text-[var(--color-brand-primary)] ${
                  currentPage === item.value ? 'text-[var(--color-brand-primary)]' : 'text-[var(--color-text-muted)]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage('apply')}
              className="btn-clean-primary text-sm !py-2.5 !px-6"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-brand-primary transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
      >
        <div className="p-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => {
                setCurrentPage(item.value);
                setIsOpen(false);
              }}
              className={`text-left text-lg font-medium p-2 rounded-lg transition-colors ${
                currentPage === item.value ? 'bg-emerald-50 text-brand-primary' : 'text-slate-600'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              setCurrentPage('apply');
              setIsOpen(false);
            }}
            className="w-full bg-brand-primary text-white py-4 rounded-xl text-center font-bold shadow-lg shadow-brand-primary/20"
          >
            Apply Now
          </button>
        </div>
      </motion.div>
    </nav>
  );
}
