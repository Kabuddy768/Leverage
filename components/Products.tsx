
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ProductsProps {
  onExplore: () => void;
}

const products = [
  {
    name: "Palladium Accounting",
    category: "Small to Medium Enterprise",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    description: "Feature-rich accounting software with unmatched stability and data security."
  },
  {
    name: "IQ Retail",
    category: "Retail & Distribution",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800",
    description: "Complete retail management solutions from point-of-sale to back-office."
  },
  {
    name: "Sage 200",
    category: "Large Enterprise",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    description: "Scale with confidence using one of the world's most trusted ERP systems."
  }
];

export default function Products({ onExplore }: ProductsProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-3">Our Portfolio</h2>
          <p className="text-4xl sm:text-5xl font-bold tracking-tight">World-Class Solutions</p>
        </div>
        <button
          onClick={onExplore}
          className="text-white border-b border-white/20 pb-1 hover:border-white transition-all flex items-center gap-2 font-medium"
        >
          Explore Full Catalog
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, idx) => (
          <div
            key={idx}
            className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 aspect-[4/5] ${idx === 0 ? 'md:col-span-2 md:aspect-[16/9] lg:col-span-2' : ''}`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

            <div className="absolute bottom-0 left-0 p-8 w-full">
              <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-300 mb-4">
                {product.category}
              </span>
              <h3 className="text-3xl font-bold mb-3">{product.name}</h3>
              <p className="text-zinc-400 line-clamp-2 max-w-md group-hover:text-zinc-200 transition-colors">
                {product.description}
              </p>

              <button
                onClick={onExplore}
                className="mt-6 flex items-center gap-2 text-white font-semibold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
              >
                Learn More
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
