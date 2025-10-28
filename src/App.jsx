import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCourses from './components/FeaturedCourses';
import Footer from './components/Footer';
import { Star, FileText, BookOpen, ShieldCheck, HelpCircle } from 'lucide-react';

function App() {
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header onApplyClick={() => setShowEnquiry(true)} />

      <main>
        <Hero onOpenEnquiry={() => setShowEnquiry(true)} />

        {/* Trust Strip */}
        <section className="bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="text-blue-600" size={16}/> Nationally Recognised Training</span>
              <span className="inline-flex items-center gap-2"><ShieldCheck className="text-blue-600" size={16}/> Skills Assure Provider</span>
              <span className="inline-flex items-center gap-1">
                <Star className="text-pink-600" size={16}/>
                <Star className="text-pink-600" size={16}/>
                <Star className="text-pink-600" size={16}/>
                <Star className="text-pink-600" size={16}/>
                <Star className="text-pink-600" size={16}/>
                <span className="ml-2">5.0 Google Rating</span>
              </span>
            </div>
          </div>
        </section>

        <FeaturedCourses />

        {/* About Section */}
        <section id="about" className="py-14 lg:py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1600&auto=format&fit=crop"
                alt="Happy graduate with certificate"
                className="w-full rounded-xl shadow-md"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-bold">Why Study With Bayside Nursing College</h2>
              <p className="mt-4 text-slate-700 max-w-prose">Learn from experienced mentors and get job-ready faster. Study online or on-campus — the choice is yours. Empower your future with nationally recognised qualifications.</p>
              <ul className="mt-6 space-y-3">
                {[
                  '10+ years of excellence in care education',
                  'Mentored by verified healthcare professionals',
                  '5.0-star student satisfaction',
                  'Real placement opportunities'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-pink-600"></span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="#about" className="inline-flex rounded-xl border border-slate-300 px-5 py-2.5 font-semibold text-slate-700 hover:bg-slate-100">Learn More About Us</a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="reviews" className="py-14 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex items-end justify-between mb-8">
              <h3 className="text-2xl md:text-3xl font-bold">What Our Students Say</h3>
              <a href="#" className="hidden md:inline-flex rounded-xl border border-slate-300 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-50">See All Reviews</a>
            </div>

            <div className="flex items-center gap-2 text-slate-700 mb-6">
              {[...Array(5)].map((_,i) => <Star key={i} size={18} className="text-pink-600" />)}
              <span className="font-semibold">5.0</span>
              <span className="text-slate-500">Based on 125 Google Reviews</span>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {name:'Emily R.', quote:'Amazing trainers and so supportive. I felt confident starting my placement and got hired soon after!', avatar:'https://i.pravatar.cc/100?img=5'},
                {name:'Jason M.', quote:'The blended learning was perfect for my schedule. Clear content and real-world assessments.', avatar:'https://i.pravatar.cc/100?img=12'},
                {name:'Sofia K.', quote:'Friendly staff, flexible study, and nationally recognised qualifications. Highly recommend!', avatar:'https://i.pravatar.cc/100?img=32'}
              ].map((r)=> (
                <div key={r.name} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full" loading="lazy"/>
                    <div className="font-semibold text-slate-900">{r.name}</div>
                  </div>
                  <div className="mt-3 flex gap-1 text-pink-600">
                    {[...Array(5)].map((_,i) => <Star key={i} size={16} />)}
                  </div>
                  <p className="mt-3 text-sm text-slate-700">{r.quote}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 md:hidden flex justify-center">
              <a href="#" className="inline-flex rounded-xl border border-slate-300 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-50">See All Reviews</a>
            </div>
          </div>
        </section>

        {/* Student Resources */}
        <section id="student-resources" className="py-14 lg:py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">Student Resources</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {title:'Fee Structure', icon: FileText, img:'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1600&auto=format&fit=crop'},
                {title:'Student Handbook', icon: BookOpen, img:'https://images.unsplash.com/photo-1457694587812-e8bf29a43845?q=80&w=1600&auto=format&fit=crop'},
                {title:'Compliance Policy', icon: ShieldCheck, img:'https://images.unsplash.com/photo-1555375771-14b0f9e1f957?q=80&w=1600&auto=format&fit=crop'},
                {title:'Student Support', icon: HelpCircle, img:'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop'}
              ].map((card) => (
                <a key={card.title} href="#" className="group rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform" loading="lazy" />
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <div className="font-semibold text-slate-900">{card.title}</div>
                    <card.icon className="text-blue-600" size={18} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="relative py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-pink-600 text-white p-8 lg:p-12 shadow-lg">
              <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden>
                <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-white blur-3xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Ready to Start Your Career in Care?</h3>
              <p className="mt-2 text-white/90 max-w-2xl">Flexible study options, expert mentors, nationally recognised training.</p>
              <div className="mt-5 flex flex-wrap gap-3 items-center">
                <button onClick={() => setShowEnquiry(true)} className="inline-flex rounded-xl bg-white text-slate-900 px-6 py-3 font-semibold hover:bg-white/90">Apply Now</button>
                <div className="flex items-center gap-1 text-sm">
                  {[...Array(5)].map((_,i) => <Star key={i} size={16} className="text-yellow-300" />)}
                  <span className="ml-2">5.0 Star Rating</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Enquiry Modal */}
      {showEnquiry && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40" role="dialog" aria-modal="true">
          <div className="w-full max-w-lg rounded-xl bg-white shadow-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
              <div className="font-semibold">Request Course Info</div>
              <button onClick={() => setShowEnquiry(false)} className="text-slate-500 hover:text-slate-700">✕</button>
            </div>
            <form className="px-6 py-5 space-y-4" onSubmit={(e)=>{e.preventDefault(); alert('Thanks! We\'ll be in touch.'); setShowEnquiry(false);}}>
              <div>
                <label className="text-sm text-slate-600">Full Name</label>
                <input required type="text" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="text-sm text-slate-600">Phone</label>
                <input required type="tel" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="04xx xxx xxx" />
              </div>
              <div>
                <label className="text-sm text-slate-600">Course</label>
                <select required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select a course</option>
                  <option>Cert III in Individual Support</option>
                  <option>First Aid</option>
                  <option>Cert IV in Ageing Support</option>
                </select>
              </div>
              <button type="submit" className="w-full rounded-xl bg-blue-600 text-white px-4 py-2.5 font-semibold hover:bg-blue-700">Submit Enquiry</button>
              <p className="text-xs text-slate-500">By submitting this form you agree to be contacted about your enquiry.</p>
            </form>
          </div>
        </div>
      )}

      {/* Sticky mobile Apply Now */}
      <div className="fixed bottom-4 inset-x-4 z-50 sm:hidden">
        <button onClick={() => setShowEnquiry(true)} className="w-full rounded-xl bg-pink-600 text-white py-3 font-semibold shadow-lg shadow-pink-300">Apply Now</button>
      </div>
    </div>
  );
}

export default App;
