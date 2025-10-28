import React from 'react';
import { Star, ShieldCheck, CheckCircle2 } from 'lucide-react';

const TrustBadges = () => (
  <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-5 text-sm text-slate-600">
    <span className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3 py-1.5 shadow-sm"><ShieldCheck className="text-blue-600" size={16}/> Nationally Recognised</span>
    <span className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3 py-1.5 shadow-sm"><CheckCircle2 className="text-blue-600" size={16}/> Skills Assure</span>
    <span className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3 py-1.5 shadow-sm"><Star className="text-pink-600" size={16}/> 5.0 Star Rating</span>
  </div>
);

const Hero = ({ onOpenEnquiry }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-pink-100 blur-3xl opacity-50" />
        <div className="absolute -bottom-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-blue-100 blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1604881987923-c4e161a7c1b2?q=80&w=1600&auto=format&fit=crop"
                alt="Smiling healthcare student with books"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
              Aged Care and Disability Support Courses in Australia
            </h1>
            <p className="mt-4 text-lg text-slate-700 max-w-prose">
              Study at your pace. Get industry-recognised care skills. Flexible courses in Aged Care and Disability Support with placement opportunities.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#courses" className="inline-flex items-center justify-center rounded-xl bg-blue-600 text-white px-6 py-3 font-semibold shadow-sm shadow-blue-200 hover:bg-blue-700">Find Courses</a>
              <button onClick={onOpenEnquiry} className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 bg-white hover:bg-slate-50">Request Course Info</button>
            </div>

            <TrustBadges />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
