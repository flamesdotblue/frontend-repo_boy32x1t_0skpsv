import React from 'react';
import { Clock3, GraduationCap, Briefcase } from 'lucide-react';

const courses = [
  {
    code: 'CHC33021',
    title: 'Certificate III in Individual Support (Ageing & Disability)',
    desc: 'Start your career in community care with hands-on learning and placement support.',
    duration: '12–24 weeks',
    delivery: 'Online + On-campus',
    placement: '120 hrs',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop'
  },
  {
    code: 'HLTAID011',
    title: 'Provide First Aid',
    desc: 'Learn essential first aid skills to respond with confidence in emergencies.',
    duration: '1 day',
    delivery: 'On-campus',
    placement: 'N/A',
    image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=1600&auto=format&fit=crop'
  },
  {
    code: 'CHC43015',
    title: 'Certificate IV in Ageing Support',
    desc: 'Advance your skills to support complex needs in residential and community settings.',
    duration: '24–36 weeks',
    delivery: 'Blended',
    placement: '120 hrs',
    image: 'https://images.unsplash.com/photo-1600959907703-125ba1374a12?q=80&w=1600&auto=format&fit=crop'
  }
];

const FeaturedCourses = () => {
  return (
    <section id="courses" className="py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Featured Courses</h2>
          <a href="#" className="hidden md:inline-flex rounded-xl bg-blue-600 text-white px-5 py-2.5 font-semibold shadow-sm shadow-blue-200 hover:bg-blue-700">View All Courses</a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <article key={c.code} className="group rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform" loading="lazy" />
              </div>
              <div className="p-4">
                <div className="text-xs font-semibold tracking-wide text-blue-700">{c.code}</div>
                <h3 className="mt-1 text-lg font-semibold text-slate-900">{c.title}</h3>
                <p className="mt-2 text-sm text-slate-600 line-clamp-2">{c.desc}</p>

                <div className="mt-4 flex items-center gap-4 text-sm text-slate-600">
                  <span className="inline-flex items-center gap-1.5"><Clock3 size={16} className="text-blue-600"/>{c.duration}</span>
                  <span className="inline-flex items-center gap-1.5"><GraduationCap size={16} className="text-blue-600"/>{c.delivery}</span>
                  <span className="inline-flex items-center gap-1.5"><Briefcase size={16} className="text-blue-600"/>{c.placement}</span>
                </div>

                <div className="mt-4">
                  <a href="#" className="inline-flex rounded-xl border border-slate-300 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-50">View Course</a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <a href="#" className="inline-flex rounded-xl bg-blue-600 text-white px-6 py-3 font-semibold shadow-sm shadow-blue-200 hover:bg-blue-700">View All Courses</a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
