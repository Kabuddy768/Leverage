
import React from 'react';
import { Cpu, ArrowLeft, HeartPulse, Stethoscope, Activity, FileText, CheckCircle2 } from 'lucide-react';
import ElectricBorder from './ElectricBorder';
import { PRODUCT_COLORS } from '../constants/products';

interface MedeiplusProps {
    onBack: () => void;
}

export default function Medeiplus({ onBack }: MedeiplusProps) {
    const features = [
        {
            title: "Patient Management",
            description: "Comprehensive electronic health records (EHR) with secure access and history tracking.",
            icon: HeartPulse
        },
        {
            title: "Clinical Workflows",
            description: "Streamlined processes for admissions, consultations, and discharge planning.",
            icon: Stethoscope
        },
        {
            title: "Medical Billing",
            description: "Integrated billing compliant with medical aid requirements and tariff codes.",
            icon: FileText
        },
        {
            title: "Outcome Analytics",
            description: "Track patient recovery rates and operational efficiency with advanced dashboards.",
            icon: Activity
        }
    ];

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in">
            {/* Back Button */}
            <button
                onClick={onBack}
                className="mb-8 flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
            >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Back to Products
            </button>

            {/* Hero Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-medium">
                        <Cpu className="w-4 h-4" />
                        <span>Healthcare Administration Solution</span>
                    </div>

                    <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white">
                        Medei <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-600">
                            Plus
                        </span>
                    </h1>

                    <p className="text-xl text-zinc-400 leading-relaxed max-w-lg">
                        A specialized ERP for the healthcare sector. Focusing on patient-centric care while ensuring financial viability and operational excellence.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="px-8 py-3 bg-white text-zinc-950 rounded-full font-bold hover:bg-zinc-200 transition-colors">
                            Request Demo
                        </button>
                        <button className="px-8 py-3 bg-zinc-900 border border-zinc-800 text-white rounded-full font-bold hover:bg-zinc-800 transition-colors">
                            Features Guide
                        </button>
                    </div>
                </div>

                {/* Electric Border Feature */}
                <div className="relative flex justify-center lg:justify-end">
                    <ElectricBorder
                        color="#ec4899"
                        speed={1.5}
                        chaos={0.15}
                        thickness={2}
                        style={{ borderRadius: 32 }}
                        className="w-full max-w-md aspect-square bg-zinc-900/50 backdrop-blur-xl flex items-center justify-center p-8"
                    >
                        <div className="text-center space-y-6">
                            <div className="w-24 h-24 mx-auto rounded-3xl bg-pink-500/20 flex items-center justify-center">
                                <Cpu className="w-12 h-12 text-pink-400" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-2">Care First</h3>
                                <p className="text-zinc-400">Technology that empowers healthcare professionals.</p>
                            </div>
                        </div>
                    </ElectricBorder>
                </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                {features.map((feature, idx) => (
                    <div key={idx} className="p-6 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-pink-500/30 transition-colors group">
                        <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-pink-500/20 transition-colors">
                            <feature.icon className="w-6 h-6 text-zinc-400 group-hover:text-pink-400 transition-colors" />
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Medeiplus?</h2>
                    <p className="text-zinc-400">
                        Built to navigate the complexities of modern healthcare regulations and billing practices.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    {['Regulatory Compliance', 'Telehealth Ready', 'Pharmacy Management', 'Laboratory Integration', 'Multi-Facility Support', 'Secure Data Storage'].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-black/20 border border-white/5">
                            <CheckCircle2 className="w-5 h-5 text-pink-500 flex-shrink-0" />
                            <span className="font-medium text-zinc-200">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
