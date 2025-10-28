import React from 'react';
import { Phone, ChevronDown } from 'lucide-react';

const Header = ({ onApplyClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
      {/* Utility Bar */}
      <div className="hidden md:flex items-center justify-end gap-4 px-4 lg:px-8 py-2 text-sm text-slate-600">
        <div className="flex items-center gap-2">
          <Phone size={16} className="text-blue-600" />
          <span>
            Call Support: <a href="tel:1300123456" className="font-medium hover:text-blue-700">1300 123 456</a>
          </span>
        </div>
      </div>

      {/* Main Nav */}
      <div className="px-4 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">BN</div>
            <div className="leading-tight">
              <div className="text-slate-900 font-semibold">Bayside Nursing College</div>
              <div className="text-xs text-slate-500">Education in Care & Support</div>
            </div>
          </a>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-slate-700">
            {['Home','About','Courses','Student Resources','Funding','Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s+/g,'-')}`} className="hover:text-blue-700 transition-colors flex items-center gap-1">
                <span>{item}</span>
                {item === 'Courses' && <ChevronDown size={16} className="text-slate-400" />}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={onApplyClick}
              className="hidden md:inline-flex rounded-xl bg-pink-600 text-white px-5 py-2.5 font-semibold shadow-sm shadow-pink-200 hover:bg-pink-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
              aria-label="Apply Now"
            >
              Apply Now
            </button>
            <button
              onClick={() => document.getElementById('mobile-nav')?.classList.toggle('hidden')}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200 text-slate-700"
              aria-label="Toggle Menu"
            >
              <span className="sr-only">Toggle Menu</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div id="mobile-nav" className="hidden lg:hidden mt-3">
          <div className="flex flex-col gap-2 p-3 rounded-xl border border-slate-200 bg-white shadow-sm">
            {['Home','About','Courses','Student Resources','Funding','Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s+/g,'-')}`} className="px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700">
                {item}
              </a>
            ))}
            <button onClick={onApplyClick} className="mt-2 rounded-xl bg-pink-600 text-white px-4 py-2 font-semibold">Apply Now</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
