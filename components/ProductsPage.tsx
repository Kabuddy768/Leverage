
import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { PRODUCTS_LIST } from '../constants/products';

interface ProductsPageProps {
  onNavigate: (page: 'palladium' | 'iqRetail' | 'sage200' | 'xactErp' | 'medeiplus') => void;
}

export default function ProductsPage({ onNavigate }: ProductsPageProps) {
  const handleProductClick = (productId: string) => {
    if (productId === 'palladium') {
      onNavigate('palladium');
    } else if (productId === 'iqRetail') {
      onNavigate('iqRetail');
    } else if (productId === 'sage200') {
      onNavigate('sage200');
    } else if (productId === 'xactErp') {
      onNavigate('xactErp');
    } else if (productId === 'medeiplus') {
      onNavigate('medeiplus');
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-16 animate-fade-in">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tighter mb-6">
          Our Solution <span className="text-zinc-500">Suite</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
          Explore our handpicked range of ERP solutions, specifically selected and customized for the unique demands of the Kenyan market.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[280px]">
        {PRODUCTS_LIST.map((product, idx) => {
          // Bento layout logic
          let colSpan = "md:col-span-3 lg:col-span-4";
          if (idx === 0) colSpan = "md:col-span-6 lg:col-span-8"; // Palladium is huge
          if (idx === 1) colSpan = "md:col-span-6 lg:col-span-4"; // IQ Retail
          if (idx === 2) colSpan = "md:col-span-3 lg:col-span-6"; // Sage 200
          if (idx === 3) colSpan = "md:col-span-3 lg:col-span-6"; // Xact ERP
          if (idx === 4) colSpan = "md:col-span-6 lg:col-span-12"; // Medeiplus wide bottom

          const Icon = product.icon;

          return (
            <div
              key={product.id}
              onClick={() => handleProductClick(product.id)}
              className={`group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-900/40 p-8 backdrop-blur-xl transition-all duration-500 hover:border-white/20 flex flex-col justify-between ${colSpan} cursor-pointer`}
            >
              {/* Background Glow Effect */}
              <div className={`absolute -top-24 -right-24 w-64 h-64 blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-gradient-to-br ${product.darkGradient}`} />

              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border transition-transform duration-500 group-hover:scale-110 ${product.darkBorder} ${product.darkBg}`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                    {product.category}
                  </span>
                  <h3 className="text-3xl font-bold tracking-tight text-white group-hover:text-zinc-100 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed max-w-md group-hover:text-zinc-300 transition-colors">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-between mt-8">
                <button className="flex items-center gap-2 text-sm font-semibold text-white/70 group-hover:text-white transition-colors">
                  Explore Product
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <div className={`w-10 h-10 rounded-full border border-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0`}>
                  <ExternalLink className="w-4 h-4 text-zinc-400" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
