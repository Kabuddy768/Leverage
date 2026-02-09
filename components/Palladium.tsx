
import React from 'react';
import { Shield, CheckCircle2, ArrowLeft, BarChart3, Users, Globe, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import ElectricBorder from './ElectricBorder';
import { PRODUCT_COLORS } from '../constants/products';

export default function Palladium() {
    const features = [
        {
            title: "Advanced General Ledger",
            description: "Complete financial control with segment-based reporting and real-time drill-down capabilities.",
            icon: BarChart3
        },
        {
            title: "Multi-Currency Support",
            description: "Seamlessly handle transactions in multiple currencies with automated exchange rate updates.",
            icon: Globe
        },
        {
            title: "Role-Based Security",
            description: "Granular user permissions ensure your data remains secure and accessible only to authorized personnel.",
            icon: Lock
        },
        {
            title: "Integrated CRM",
            description: "Manage customer relationships directly within your accounting software for better sales insights.",
            icon: Users
        }
    ];

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in">
            {/* Back Button */}
            <Link
                to="/products"
                className="mb-8 flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
            >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Back to Products
            </Link>

            {/* Hero Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium">
                        <Shield className="w-4 h-4" />
                        <span>SME Accounting Solution</span>
                    </div>

                    <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white">
                        Palladium <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-600">
                            Accounting
                        </span>
                    </h1>

                    <p className="text-xl text-zinc-400 leading-relaxed max-w-lg">
                        A robust, feature-rich accounting solution designed to offer big business functionality at an SME price point. Stability, security, and simplicity combined.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="px-8 py-3 bg-white text-zinc-950 rounded-full font-bold hover:bg-zinc-200 transition-colors">
                            Get Started
                        </button>
                        <button className="px-8 py-3 bg-zinc-900 border border-zinc-800 text-white rounded-full font-bold hover:bg-zinc-800 transition-colors">
                            Download Brochure
                        </button>
                    </div>
                </div>

                {/* Electric Border Feature */}
                <div className="relative flex justify-center lg:justify-end">
                    <ElectricBorder
                        color="#8b5cf6"
                        speed={1.5}
                        chaos={0.15}
                        thickness={2}
                        style={{ borderRadius: 32 }}
                        className="w-full max-w-md aspect-square bg-zinc-900/50 backdrop-blur-xl flex items-center justify-center p-8"
                    >
                        <div className="text-center space-y-6">
                            <div className="w-24 h-24 mx-auto rounded-3xl bg-violet-500/20 flex items-center justify-center">
                                <Shield className="w-12 h-12 text-violet-400" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-2">Built for Growth</h3>
                                <p className="text-zinc-400">Scalable architecture that grows with your business needs.</p>
                            </div>
                        </div>
                    </ElectricBorder>
                </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                {features.map((feature, idx) => (
                    <div key={idx} className="p-6 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-violet-500/30 transition-colors group">
                        <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-violet-500/20 transition-colors">
                            <feature.icon className="w-6 h-6 text-zinc-400 group-hover:text-violet-400 transition-colors" />
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Palladium?</h2>
                    <p className="text-zinc-400">
                        Unlike traditional accounting software, Palladium is built on modern technology that ensures data integrity and zero corruption.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    {['Zero Data Corruption', 'Real-time Processing', 'User-Friendly Interface', 'Affordable Licensing', 'Local Support', 'Seamless Integration'].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-black/20 border border-white/5">
                            <CheckCircle2 className="w-5 h-5 text-violet-500 flex-shrink-0" />
                            <span className="font-medium text-zinc-200">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
