
import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS_LIST } from '../constants/products';

export default function ProductsPage() {
  const navigate = useNavigate();

  const handleProductClick = (productId: string) => {
    if (productId === 'palladium') {
      navigate('/products/palladium');
    } else if (productId === 'iqRetail') {
      navigate('/products/iq-retail');
    } else if (productId === 'sage200') {
      navigate('/products/sage-200');
    } else if (productId === 'xactErp') {
      navigate('/products/xact-erp');
    } else if (productId === 'medeilplus') {
      navigate('/products/medeilplus');
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

      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[320px]">
        {PRODUCTS_LIST.map((product, idx) => {
          // Bento layout logic
          let colSpan = "md:col-span-3 lg:col-span-4";
          if (idx === 0) colSpan = "md:col-span-6 lg:col-span-8"; // Palladium is huge
          if (idx === 1) colSpan = "md:col-span-6 lg:col-span-4"; // IQ Retail
          if (idx === 2) colSpan = "md:col-span-3 lg:col-span-6"; // Sage 200
          if (idx === 3) colSpan = "md:col-span-3 lg:col-span-6"; // Xact ERP
          if (idx === 4) colSpan = "md:col-span-6 lg:col-span-12"; // Medeilplus wide bottom

          const Icon = product.icon;

          return (
            <div
              key={product.id}
              onClick={() => handleProductClick(product.id)}
              className={`group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-900/40 p-8 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-zinc-900/60 flex flex-col ${colSpan} cursor-pointer min-h-[300px]`}
            >
              {/* Background Glow Effect */}
              <div className={`absolute -top-24 -right-24 w-64 h-64 blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-gradient-to-br ${product.darkGradient}`} />

              {/* Content Container */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Top Section */}
                <div className="flex-grow">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 border transition-transform duration-500 group-hover:scale-110 ${product.darkBorder} ${product.darkBg}`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                      {product.category}
                    </span>
                    <h3 className="text-3xl font-bold tracking-tight text-white group-hover:text-zinc-100 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed max-w-md group-hover:text-zinc-300 transition-colors line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Section - Explore Button */}
                <div className="mt-auto pt-4">
                  <div className="flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-3 transition-all duration-300">
                    <span>Explore Product</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

