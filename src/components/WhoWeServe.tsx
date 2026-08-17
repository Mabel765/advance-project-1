import React from 'react';
import { Factory, Hotel, HardHat, GraduationCap, Building, Briefcase, Users, Warehouse, HeartPulse } from 'lucide-react';

export const WhoWeServe: React.FC = () => {
  const industries = [
    { title: 'Factories and production facilities', icon: Factory, note: 'Continuous manufacturing load & high-torque machinery' },
    { title: 'Hotels and hospitality businesses', icon: Hotel, note: '24/7 guest comfort, cold rooms & event power' },
    { title: 'Construction companies', icon: HardHat, note: 'Rugged job-site power & prime generator duty' },
    { title: 'Schools and educational institutions', icon: GraduationCap, note: 'Campus facilities, labs & administrative uptime' },
    { title: 'Hospitals and healthcare facilities', icon: HeartPulse, note: 'Critical life-support systems & emergency backup' },
    { title: 'Offices and commercial buildings', icon: Building, note: 'IT infrastructure, elevators & lighting continuity' },
    { title: 'Facility management companies', icon: Briefcase, note: 'Multi-property service contracts & spare parts supply' },
    { title: 'Small and medium-sized businesses', icon: Warehouse, note: 'Cost-effective dependable power solutions' },
    { title: 'Procurement and operations teams', icon: Users, note: 'Transparent specifications & verified OEM parts' },
  ];

  return (
    <section id="industries" className="py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
            <Factory className="w-3.5 h-3.5" />
            <span>Power-Critical Sectors</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-tight">
            WHO WE SERVE
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium">
            Our solutions are suitable for businesses and organizations that depend on reliable power, including:
          </p>
        </div>

        {/* 9 Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {industries.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200 hover:border-orange-500/80 rounded-[32px] p-7 shadow-2xl shadow-slate-200/50 transition-all group hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 shrink-0 transition-transform group-hover:scale-105">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed pl-16 font-medium">
                  {item.note}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
