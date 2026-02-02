
import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "James Mwangi",
    role: "Operations Director, LogiTrans Kenya",
    text: "Office Choice Solutions transformed our warehouse operations with Palladium. Their implementation team was thorough and understood our local tax needs perfectly.",
    rating: 5
  },
  {
    name: "Sarah Kimani",
    role: "CFO, RetailHub East Africa",
    text: "The transition to IQ Retail was seamless. We now have real-time visibility across all 15 branches. Truly the best value-added resellers in the region.",
    rating: 5
  },
  {
    name: "Robert Odhiambo",
    role: "Managing Director, PharmaLink",
    text: "Sage 200 implementation was a massive undertaking, but Office Choice handled it with expertise. Their support desk is responsive and professional.",
    rating: 4
  }
];

export default function Testimonials() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-3">Client Success</h2>
        <p className="text-4xl sm:text-5xl font-bold tracking-tight">Trusted by Kenya's Best</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div 
            key={idx}
            className="p-10 rounded-[2.5rem] bg-zinc-900/50 border border-white/5 relative flex flex-col justify-between hover:bg-zinc-900 transition-colors"
          >
            <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5" />
            
            <div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < t.rating ? 'text-yellow-500 fill-yellow-500' : 'text-zinc-700'}`} 
                  />
                ))}
              </div>
              <p className="text-lg text-zinc-300 italic mb-8 leading-relaxed">
                "{t.text}"
              </p>
            </div>

            <div>
              <p className="font-bold text-white text-lg">{t.name}</p>
              <p className="text-zinc-500 text-sm">{t.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 p-12 rounded-[3rem] bg-gradient-to-r from-zinc-900 to-zinc-950 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="max-w-xl text-center lg:text-left">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">Ready to scale your business?</h3>
          <p className="text-zinc-400">Join 500+ businesses using our ERP solutions to drive efficiency and profit.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
          <button className="px-10 py-4 bg-white text-zinc-950 font-bold rounded-full hover:bg-zinc-200 transition-all text-center">
            Book a Demo
          </button>
          <button className="px-10 py-4 bg-zinc-800 text-white font-bold rounded-full hover:bg-zinc-700 transition-all border border-white/10 text-center">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
}
