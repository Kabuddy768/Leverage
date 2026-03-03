import React from 'react';
import { Home, ArrowRight, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

export default function NotFoundPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 flex items-center justify-center bg-zinc-950 text-white relative overflow-hidden">
            <SEO
                title="404 - Page Not Found | Office Choice Solutions"
                description="The page you are looking for does not exist. Please return to the homepage or contact our support team."
            />

            {/* Background Ambience */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl aspect-square bg-red-500/10 blur-[120px] -z-10 rounded-full pointer-events-none animate-pulse" />

            <div className="relative z-10 text-center px-4 max-w-2xl mx-auto space-y-8 animate-fade-in">

                <div className="flex justify-center mb-8">
                    <div className="relative">
                        <ShieldAlert className="w-24 h-24 text-red-500/80 animate-bounce" />
                        <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full" />
                    </div>
                </div>

                <div className="space-y-4">
                    <h1 className="text-6xl sm:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-600">
                        404
                    </h1>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                        Page Not Found
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-md mx-auto leading-relaxed">
                        We couldn't find the page you're looking for. It might have been moved, deleted, or never existed in the first place.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                    <Link
                        to="/"
                        className="group flex items-center gap-2 px-8 py-4 bg-white text-zinc-950 rounded-full font-bold hover:bg-zinc-200 transition-all w-full sm:w-auto justify-center"
                    >
                        <Home className="w-5 h-5" />
                        Back to Home
                    </Link>
                    <Link
                        to="/contact"
                        className="group flex items-center gap-2 px-8 py-4 bg-zinc-900 border border-zinc-800 text-white rounded-full font-bold hover:bg-zinc-800 transition-all w-full sm:w-auto justify-center"
                    >
                        Contact Support
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </main>
    );
}
