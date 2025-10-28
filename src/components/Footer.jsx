import React from 'react';
import { Facebook, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-20" id="contact">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">BN</div>
              <div className="font-semibold text-white">Bayside Nursing College</div>
            </div>
            <p className="mt-4 text-sm text-slate-400 max-w-xs">Empowering careers in care with nationally recognised qualifications and supportive mentors.</p>
            <div className="mt-4 flex items-center gap-3">
              <a aria-label="Facebook" href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10"><Facebook size={18}/></a>
              <a aria-label="LinkedIn" href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10"><Linkedin size={18}/></a>
              <a aria-label="YouTube" href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10"><Youtube size={18}/></a>
            </div>
          </div>

          <div>
            <div className="font-semibold text-white">Quick Links</div>
            <ul className="mt-4 space-y-2 text-sm">
              {['About','Blog','Pricing','Gallery'].map((t) => (
                <li key={t}><a href="#" className="hover:text-white">{t}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-semibold text-white">Courses</div>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                'Cert III in Individual Support',
                'First Aid',
                'Cert IV in Ageing Support',
                'Disability Support Skill Set',
                'Manual Handling'
              ].map((t) => (
                <li key={t}><a href="#courses" className="hover:text-white">{t}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-semibold text-white">Contact</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Phone: <a href="tel:1300123456" className="hover:text-white">1300 123 456</a></li>
              <li>Email: <a href="mailto:hello@bayside.edu.au" className="hover:text-white">hello@bayside.edu.au</a></li>
              <li>Mon–Fri: 9:00am–5:00pm AEST</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 text-xs text-slate-400 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Bayside Nursing College. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
