
import React from 'react';
import { Settings, ShieldCheck, Database, Zap, Users, Globe } from 'lucide-react';

const features = [
  {
    title: "Seamless Implementation",
    description: "Our certified consultants ensure your ERP migration is zero-downtime and data-accurate.",
    icon: Zap,
  },
  {
    title: "Local Compliance",
    description: "Fully KRA compliant solutions tailored for the Kenyan financial and tax landscape.",
    icon: ShieldCheck,
  },
  {
    title: "Bespoke Customization",
    description: "We don't do 'out of the box'. We build tailored workflows that match your business DNA.",
    icon: Settings,
  },
  {
    title: "Cloud Infrastructure",
    description: "Secure, scalable hosting for Sage and Palladium instances with 99.9% uptime guarantees.",
    icon: Database,
  },
  {
    title: "User Training",
    description: "Empower your staff with hands-on training sessions and ongoing support documentation.",
    icon: Users,
  },
  {
    title: "Regional Expertise",
    description: "Deep knowledge of East African trade, logistics, and retail operational requirements.",
    icon: Globe,
  }
];

export default function Features() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-3">Why Choose Us</h2>
        <p className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Built for Modern Enterprise</p>
        <div className="h-1 w-20 bg-white mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div 
            key={idx}
            className="group p-8 rounded-3xl border border-white/5 bg-zinc-900/50 hover:bg-zinc-800/50 transition-all duration-300 hover:border-white/10"
          >
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <feature.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-zinc-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
