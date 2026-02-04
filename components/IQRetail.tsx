
import React from 'react';
import { BarChart3, ArrowLeft, ShoppingCart, Store, Network, RefreshCw, CheckCircle2 } from 'lucide-react';
import ElectricBorder from './ElectricBorder';
import { PRODUCT_COLORS } from '../constants/products';

interface IQRetailProps {
    onBack: () => void;
}

export default function IQRetail({ onBack }: IQRetailProps) {
    const features = [
        {
            title: "Complete POS System",
            description: "Fast, reliable point-of-sale processing with offline capabilities and integrated payments.",
            icon: ShoppingCart
        },
        {
            title: "Multi-Branch Management",
            description: "Centralized control over pricing, stock, and reporting across all your retail locations.",
            icon: Network
        },
        {
            title: "Inventory Intelligence",
            description: "Automated replenishment, serial number tracking, and sophisticated stock optimization.",
            icon: Store
        },
        {
            title: "Seamless Integration",
            description: "Connects effortlessly with e-commerce platforms and third-party financial systems.",
            icon: RefreshCw
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
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                        <BarChart3 className="w-4 h-4" />
                        <span>Retail & Distribution Solution</span>
                    </div>

                    <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white">
                        IQ <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600">
                            Retail
                        </span>
                    </h1>

                    <p className="text-xl text-zinc-400 leading-relaxed max-w-lg">
                        The definitive solution for specialized retail environments. From single stores to complex multi-branch distributed enterprises, IQ Retail delivers absolute control.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="px-8 py-3 bg-white text-zinc-950 rounded-full font-bold hover:bg-zinc-200 transition-colors">
                            Schedule Demo
                        </button>
                        <button className="px-8 py-3 bg-zinc-900 border border-zinc-800 text-white rounded-full font-bold hover:bg-zinc-800 transition-colors">
                            View Features
                        </button>
                    </div>
                </div>

                {/* Electric Border Feature */}
                <div className="relative flex justify-center lg:justify-end">
                    <ElectricBorder
                        color="#3b82f6"
                        speed={1.5}
                        chaos={0.15}
                        thickness={2}
                        style={{ borderRadius: 32 }}
                        className="w-full max-w-md aspect-square bg-zinc-900/50 backdrop-blur-xl flex items-center justify-center p-8"
                    >
                        <div className="text-center space-y-6">
                            <div className="w-24 h-24 mx-auto rounded-3xl bg-blue-500/20 flex items-center justify-center">
                                <BarChart3 className="w-12 h-12 text-blue-400" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-2">Retail Powerhouse</h3>
                                <p className="text-zinc-400">Optimized for high-volume transactions and complex inventory.</p>
                            </div>
                        </div>
                    </ElectricBorder>
                </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                {features.map((feature, idx) => (
                    <div key={idx} className="p-6 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-blue-500/30 transition-colors group">
                        <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                            <feature.icon className="w-6 h-6 text-zinc-400 group-hover:text-blue-400 transition-colors" />
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose IQ Retail?</h2>
                    <p className="text-zinc-400">
                        Designed by retailers for retailers. It handles the nuances of size/color/style matrixes, serial numbers, and airtime sales out of the box.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    {['Integrated Loyalty System', 'Airtime & Electricity Sales', 'Mobile POS Capabilities', 'Automated Ordering', 'Advanced Reporting', 'e-Commerce Ready'].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-black/20 border border-white/5">
                            <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                            <span className="font-medium text-zinc-200">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
