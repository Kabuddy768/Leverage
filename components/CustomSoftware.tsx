import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Terminal, CheckCircle2, ArrowLeft, Code2, Cpu, Rocket, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import ElectricBorder from './ElectricBorder';

export default function CustomSoftware() {
    const features = [
        {
            title: "Bespoke Business Logic",
            description: "Built strictly around your operational workflows, ensuring the software adapts to your unique business processes.",
            icon: Code2
        },
        {
            title: "ERP Ecosystem Integration",
            description: "Connect specialized applications and legacy systems seamlessly to your core ERP, eliminating operational silos.",
            icon: Cpu
        },
        {
            title: "Process Automation",
            description: "Iterative implementation of automation tools designed specifically to maximize ROI and reduce manual administrative overhead.",
            icon: Rocket
        },
        {
            title: "Enterprise Compliance",
            description: "Bank-grade data integrity and robust role-based security protocols baked into the architecture from day one.",
            icon: ShieldCheck
        }
    ];

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in">
            <Helmet>
                <title>Custom Software Development Kenya | Office Choice Solutions</title>
                <meta name="description" content="Expert custom software development in Kenya. We build bespoke applications, API integrations, and scalable enterprise software tailored perfectly to your business needs." />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Custom Software Development",
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": "Office Choice Solutions Ltd"
                        },
                        "areaServed": "Kenya",
                        "description": "Expert custom software development tailored to your specific business requirements."
                    })}
                </script>
            </Helmet>

            {/* Back Button */}
            <Link
                to="/products"
                className="mb-8 flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group w-max"
            >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Back to Solutions
            </Link>

            {/* Hero Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-500/10 border border-slate-500/20 text-slate-400 text-sm font-medium">
                        <Terminal className="w-4 h-4" />
                        <span>Bespoke Engineering</span>
                    </div>

                    <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white gap-2 flex flex-col">
                        <span>Custom</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200">
                            Software
                        </span>
                    </h1>

                    <p className="text-xl text-zinc-400 leading-relaxed max-w-lg">
                        Turn your unique vision into powerful reality. We engineer robust, scalable bespoke applications designed to resolve your complex operational challenges.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link to="/contact" className="px-8 py-3 bg-white text-zinc-950 rounded-full font-bold hover:bg-zinc-200 transition-colors">
                            Discuss Your Project
                        </Link>
                        <Link to="/contact" className="px-8 py-3 bg-zinc-900 border border-zinc-800 text-white rounded-full font-bold hover:bg-zinc-800 transition-colors">
                            Request Consultation
                        </Link>
                    </div>
                </div>

                {/* Electric Border Feature */}
                <div className="relative flex justify-center lg:justify-end">
                    <ElectricBorder
                        color="#94a3b8"
                        speed={1.5}
                        chaos={0.15}
                        thickness={2}
                        style={{ borderRadius: 32 }}
                        className="w-full max-w-md aspect-square bg-zinc-900/50 backdrop-blur-xl flex items-center justify-center p-8"
                    >
                        <div className="text-center space-y-6">
                            <div className="w-24 h-24 mx-auto rounded-3xl bg-slate-500/20 flex items-center justify-center">
                                <Terminal className="w-12 h-12 text-slate-300" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-2">Built to Scale</h3>
                                <p className="text-zinc-400">Future-proof architecture optimized for performance and growth.</p>
                            </div>
                        </div>
                    </ElectricBorder>
                </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                {features.map((feature, idx) => (
                    <div key={idx} className="p-6 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-slate-500/30 transition-colors group">
                        <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-slate-500/20 transition-colors">
                            <feature.icon className="w-6 h-6 text-zinc-400 group-hover:text-slate-300 transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                        <p className="text-zinc-400 leading-relaxed text-sm">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Why Choose Section */}
            <div className="bg-zinc-900/30 rounded-[2.5rem] p-8 md:p-16 border border-white/5">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Engineering Approach</h2>
                    <p className="text-zinc-400">
                        We don't just write code; we solve complex business challenges. Our methodology ensures any custom extension perfectly aligns with your overarching ERP strategy.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    {['Business Process Mapping', 'Workflow Optimization', 'Enterprise Architecture', 'System Validation', 'Seamless Deployment', 'Ongoing Support & Scaling'].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-black/20 border border-white/5">
                            <CheckCircle2 className="w-5 h-5 text-slate-400 flex-shrink-0" />
                            <span className="font-medium text-zinc-200">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
