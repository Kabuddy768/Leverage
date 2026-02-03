
import React from 'react';
import { Target, Users, ShieldCheck, Globe, Rocket, Award, CheckCircle2 } from 'lucide-react';
import LightPillar from './LightPillar';

const Values = [
  {
    title: "Personalized Excellence",
    desc: "We don't believe in one-size-fits-all. Every ERP solution we deploy is tailored to the specific business DNA of our clients.",
    icon: Target,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Local Expertise",
    desc: "Deeply rooted in the Kenyan market, we understand the local tax (KRA) and operational landscapes like no other.",
    icon: Globe,
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Innovative Growth",
    desc: "We leverage the latest technology to empower our team and our clients to meet dynamic global challenges.",
    icon: Rocket,
    color: "from-violet-500 to-purple-500"
  }
];

export default function AboutPage() {
  return (
    <article className="min-h-screen bg-zinc-950 text-white overflow-hidden">
      {/* Hero Section with LightPillar */}
      <section className="relative w-full h-[70vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <LightPillar
            topColor="#3b82f6"
            bottomColor="#a855f7"
            intensity={0.6}
            rotationSpeed={0.2}
            glowAmount={0.003}
            pillarWidth={4}
            pillarHeight={0.6}
            noiseIntensity={0.3}
            pillarRotation={15}
            interactive={true}
            mixBlendMode="screen"
            quality="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-bold tracking-widest text-zinc-400 mb-8">
            <Award className="w-4 h-4 text-yellow-500" />
            ESTABLISHED SPECIALISTS
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1] mb-8">
            Crafting the Future of<br />
            <span className="bg-gradient-to-r from-blue-400 via-white to-purple-400 bg-clip-text text-transparent">
              Kenyan Enterprise
            </span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Office Choice Solutions Ltd is a leading value-added reseller and implementation specialist, dedicated to delivering transformative ERP ecosystems.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight">Our Core Mission</h2>
            <div className="space-y-6">
              <div className="p-8 rounded-[2rem] border border-white/5 bg-zinc-900/40 backdrop-blur-sm">
                <p className="text-xl text-zinc-300 leading-relaxed italic">
                  "To provide high-quality, cost-effective, personalized, and innovative business solutions that meet the evolving needs of our clients."
                </p>
              </div>
              <p className="text-zinc-400 leading-relaxed text-lg">
                We bridge the gap between complex software and business success. By focusing on implementation excellence, we ensure that every ERP tool becomes a catalyst for real growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-medium">Certified Implementation</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">KRA Compliance Experts</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-medium">Post-Live Support 24/7</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-pink-500" />
                <span className="text-sm font-medium">Continuous Training</span>
              </div>
            </div>
          </div>

          {/* Vision Bento Layout */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 p-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 flex flex-col justify-end min-h-[240px]">
              <Users className="w-10 h-10 text-white mb-6" />
              <h3 className="text-2xl font-bold mb-2">Team Empowerment</h3>
              <p className="text-zinc-500 text-sm">Empowering our team through continuous professional development to meet global challenges.</p>
            </div>
            <div className="p-8 rounded-[2rem] border border-white/5 bg-zinc-900/40 flex flex-col justify-between aspect-square">
              <ShieldCheck className="w-8 h-8 text-blue-400" />
              <div className="text-4xl font-black">12+</div>
              <div className="text-xs uppercase tracking-widest text-zinc-500">Years Industry Legacy</div>
            </div>
            <div className="p-8 rounded-[2rem] border border-white/5 bg-zinc-900/40 flex flex-col justify-between aspect-square">
              <div className="text-4xl font-black">500+</div>
              <div className="text-xs uppercase tracking-widest text-zinc-500">Successful Deployments</div>
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Bento Grid */}
      <section className="bg-zinc-900/30 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-3">Our Core Values</h2>
            <p className="text-4xl sm:text-5xl font-bold tracking-tight">How we operate</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Values.map((value, idx) => (
              <div 
                key={idx}
                className="group p-10 rounded-[2.5rem] border border-white/5 bg-zinc-900/60 hover:bg-zinc-800 transition-all duration-500"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br ${value.color} group-hover:scale-110 transition-transform shadow-lg shadow-white/5`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden p-12 md:p-20 rounded-[3rem] border border-white/10 bg-zinc-950 text-center">
           <div className="absolute inset-0 z-0 opacity-10">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px]" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[120px]" />
           </div>
           <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Join the Digital Revolution</h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                Discover why Office Choice Solutions is the preferred implementation partner for Kenya's most ambitious companies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-4 bg-white text-zinc-950 font-bold rounded-full hover:bg-zinc-200 transition-all">
                  Contact Our Team
                </button>
                <button className="px-10 py-4 border border-white/10 text-white font-bold rounded-full hover:bg-white/5 transition-all">
                  Our Partnerships
                </button>
              </div>
           </div>
        </div>
      </section>
    </article>
  );
}
