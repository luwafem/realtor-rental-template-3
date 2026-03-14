import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const PropertyCard = ({ property }) => {
  const { id, name, type, bedrooms, bathrooms, area, location, price, image, features } = property

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative bg-[#0f1f2f] border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:border-amber-400/30"
    >
      <Link to={`/properties/${id}`}>
        {/* Image Container with Zoom Effect */}
        <div className="relative h-72 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f2f] via-transparent to-transparent opacity-60" />
          
          {/* Price Tag - with gold accent */}
          <div className="absolute top-4 right-4 bg-[#0a1928]/80 backdrop-blur-md border border-amber-400/20 px-4 py-2 rounded-full">
            <span className="text-[11px] tracking-widest text-amber-400 font-light">{price}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="mb-6">
            <span className="text-[9px] uppercase tracking-[0.3em] text-amber-400/60 mb-2 block italic">
              {type} • {location}
            </span>
            <h3 className="text-xl font-extralight tracking-tight text-white group-hover:text-amber-400/90 transition-colors">
              {name}
            </h3>
          </div>

          {/* Technical Specs - with subtle gold dividers */}
          <div className="flex items-center gap-4 border-y border-white/5 py-4 mb-6">
            <div className="flex flex-col">
              <span className="text-[8px] uppercase tracking-tighter text-amber-400/40">Beds</span>
              <span className="text-xs text-white/80 font-light">{bedrooms || '—'}</span>
            </div>
            <div className="w-[1px] h-4 bg-amber-400/20" />
            <div className="flex flex-col">
              <span className="text-[8px] uppercase tracking-tighter text-amber-400/40">Baths</span>
              <span className="text-xs text-white/80 font-light">{bathrooms || '—'}</span>
            </div>
            <div className="w-[1px] h-4 bg-amber-400/20" />
            <div className="flex flex-col">
              <span className="text-[8px] uppercase tracking-tighter text-amber-400/40">Sq Ft</span>
              <span className="text-xs text-white/80 font-light">{area}</span>
            </div>
          </div>

          {/* Features Preview */}
          <div className="flex flex-wrap gap-2 mb-8">
            {features.slice(0, 2).map((f, idx) => (
              <span 
                key={idx} 
                className="text-[9px] uppercase tracking-widest px-3 py-1 border border-amber-400/20 rounded-full text-amber-400/60"
              >
                {f}
              </span>
            ))}
            {features.length > 2 && (
              <span className="text-[9px] uppercase tracking-widest px-3 py-1 text-amber-400/40 italic">
                +{features.length - 2} more
              </span>
            )}
          </div>

          {/* Action */}
          <div className="flex items-center justify-between group/link w-full text-[10px] uppercase tracking-[0.3em] text-amber-400 font-bold">
            <span>View Details</span>
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default PropertyCard