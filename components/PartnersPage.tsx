
import React from 'react';
import { Shield, Factory, Handshake, Globe, ArrowUpRight, CheckCircle2, Quote, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Beams from './Beams';

const PARTNERS = [
    {
        id: 'saferpower',
        name: 'Saferpower Ltd',
        industry: 'Energy & Electrical Solutions',
        description: 'A leader in electrical safety and power management across East Africa. We implemented a unified financial system that streamlined their complex supply chain.',
        icon: Shield,
        accent: 'from-blue-500 to-indigo-500',
        tags: ['Energy', 'Logistics', 'KRA Compliant']
    },
    {
        id: 'zeka',
        name: 'Zeka Wire Products',
        industry: 'Industrial Manufacturing',
        description: 'Specialists in high-tensile wire products for the construction sector. Our Xact ERP implementation optimized their production floors and reduced raw material waste by 18%.',
        icon: Factory,
        accent: 'from-orange-500 to-red-500',
        tags: ['Manufacturing', 'ERP', 'Bespoke Workflows']
    },
    {
        id: 'aea',
        name: 'AEA (Association of Evangelicals in Africa)',
        industry: 'Non-Profit & NGO',
        description: 'A continental organization requiring sophisticated multi-currency reporting and donor transparency. We provided a custom Sage 200 setup to manage their pan-African operations.',
        icon: Globe,
        accent: 'from-emerald-500 to-teal-500',
        tags: ['NGO', 'Sage 200', 'Multi-Currency']
    }
];

export default function PartnersPage() {
    return (
        <article className="min-h-screen bg-zinc-950 text-white selection:bg-white/20">
            {/* Dynamic Background Section */}
            <section className="relative w-full h-[60vh] flex items-center justify-center pt-24 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-50">
                    <Beams
                        beamWidth={4}
                        beamHeight={40}
                        beamNumber={15}
                        lightColor="#ffffff"
                        speed={1.5}
                        noiseIntensity={2.0}
                        scale={0.3}
                        rotation={45}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/60 to-zinc-950" />
                </div>

                <div className="relative z-10 text-center px-4 animate-fade-in space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-bold tracking-widest text-zinc-400">
                        <Handshake className="w-3.5 h-3.5 text-blue-500" />
                        STRATEGIC COLLABORATIONS
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                        Our Ecosystem of <br />
                        <span className="bg-gradient-to-r from-white via-zinc-400 to-zinc-600 bg-clip-text text-transparent">Partners</span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-medium">
                        Empowering Kenya's industry leaders through precision ERP implementations and dedicated technical support.
                    </p>
                </div>
            </section>

            {/* Partners Grid Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
                    {PARTNERS.map((partner, idx) => (
                        <div
                            key={partner.id}
                            className={`group relative grid grid-cols-1 lg:grid-cols-12 gap-8 p-1 rounded-[3rem] border border-white/5 bg-zinc-900/40 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-white/20`}
                        >
                            {/* Visual Card Side */}
                            <div className="lg:col-span-5 relative overflow-hidden rounded-[2.8rem] min-h-[350px] bg-zinc-950 flex items-center justify-center">
                                <div className={`absolute -top-32 -right-32 w-80 h-80 blur-[100px] opacity-20 bg-gradient-to-br ${partner.accent}`} />
                                <div className="relative z-10 flex flex-col items-center gap-6">
                                    <div className={`w-24 h-24 rounded-3xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-700`}>
                                        <partner.icon className="w-12 h-12 text-white" />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-3xl font-black tracking-tighter mb-1">{partner.name}</h3>
                                        <p className="text-zinc-500 font-bold text-xs uppercase tracking-widest">{partner.industry}</p>
                                    </div>
                                </div>
                                {/* Decorative element */}
                                <div className="absolute bottom-6 right-6 opacity-5 group-hover:opacity-20 transition-opacity">
                                    <partner.icon className="w-40 h-40" />
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="lg:col-span-7 flex flex-col justify-center p-8 lg:p-12 space-y-8">
                                <div className="space-y-4">
                                    <div className="flex flex-wrap gap-2">
                                        {partner.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h2 className="text-4xl font-bold tracking-tight">Collaboration Story</h2>
                                    <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
                                        {partner.description}
                                    </p>
                                </div>

                                <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                                    <div className="flex items-center gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                                        <span className="font-semibold text-zinc-300">Implementation Successful</span>
                                    </div>
                                    <button className="flex items-center gap-2 font-bold text-white hover:text-zinc-300 transition-colors group/btn">
                                        Case Study (PDF)
                                        <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Trust Quote Section */}
            <section className="py-24 bg-zinc-900/20 border-y border-white/5">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <Quote className="w-12 h-12 text-zinc-700 mx-auto mb-8" />
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8 leading-tight italic text-zinc-300">
                        "Their local expertise and deep understanding of manufacturing workflows made them the obvious choice for our pan-African digital transformation."
                    </h2>
                    <div className="flex flex-col items-center">
                        <p className="text-xl font-bold">Director of Operations</p>
                        <p className="text-zinc-500 uppercase tracking-widest text-sm font-bold mt-1">Industrial Sector Partner</p>
                    </div>
                </div>
            </section>

            {/* Global Reach / Map Placeholder Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-5xl font-black tracking-tight leading-none">A Network Beyond <br /> <span className="text-zinc-500">Boundaries</span></h2>
                        <p className="text-xl text-zinc-400 leading-relaxed">
                            With partners spanning from Cape Town to Cairo, Office Choice Solutions delivers localized support on a continental scale.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Multi-regional Implementation Support",
                                "Cross-border Tax & Compliance Expertise",
                                "Unified Pan-African Support Desk",
                                "Consolidated Multi-currency Financials"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center">
                                        <CheckCircle2 className="w-4 h-4 text-blue-500" />
                                    </div>
                                    <span className="font-medium text-zinc-300">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative aspect-square rounded-[3rem] border border-white/10 bg-zinc-900/50 flex items-center justify-center p-12 overflow-hidden">
                        {/* Abstract Network Graph or World Map would go here */}
                        <div className="absolute inset-0 z-0">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px]" />
                        </div>
                        <div className="relative z-10 grid grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="text-5xl font-black mb-1">12+</div>
                                <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Countries Covered</div>
                            </div>
                            <div>
                                <div className="text-5xl font-black mb-1">50+</div>
                                <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Industry Verticals</div>
                            </div>
                            <div>
                                <div className="text-5xl font-black mb-1">24h</div>
                                <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Max Response Time</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden p-12 md:p-24 rounded-[4rem] border border-white/10 bg-zinc-950 text-center space-y-10">
                    <div className="absolute inset-0 -z-10 opacity-10">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zinc-400 rounded-full blur-[150px]" />
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter">Ready to become a partner?</h2>
                    <p className="text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed font-medium">
                        Join a select group of industry leaders who have achieved operational excellence through Office Choice Solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            to="/contact"
                            className="px-12 py-5 bg-white text-zinc-950 font-black rounded-3xl hover:bg-zinc-200 transition-all flex items-center justify-center gap-3"
                        >
                            Become a Partner
                            <ArrowUpRight className="w-5 h-5" />
                        </Link>
                        <button className="px-12 py-5 border border-white/10 text-white font-black rounded-3xl hover:bg-white/5 transition-all">
                            Technical Documentation
                        </button>
                    </div>
                </div>
            </section>
        </article>
    );
}

