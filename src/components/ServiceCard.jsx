import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ServiceCard = ({ service }) => {
  const { id, title, shortDesc, image, price } = service

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col bg-[#0f1f2f] border border-white/5 overflow-hidden rounded-sm transition-all duration-700 hover:border-amber-400/30"
    >
      <Link to={`/services/${id}`} className="block h-full">
        {/* Image Container with Ken Burns-style Zoom */}
        <div className="relative h-72 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" 
          />
          {/* Architectural Scrim Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f2f] via-transparent to-transparent opacity-80" />
          
          {/* Subtle Price/Guidance Badge - Gold Accent */}
          <div className="absolute top-6 right-6">
            <span className="text-[9px] tracking-[0.3em] uppercase text-amber-400 bg-[#0a1928]/80 backdrop-blur-md px-3 py-1.5 border border-amber-400/20 rounded-full font-bold">
              {price.includes('₦') ? price : `₦${price}`}
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8 flex flex-col flex-grow">
          <span className="text-[8px] tracking-[0.4em] uppercase text-amber-400/60 mb-3 font-bold">
            Our Expertise
          </span>
          <h3 className="text-2xl font-extralight tracking-tighter text-white mb-4 group-hover:text-amber-400/90 transition-all duration-500">
            {title}
          </h3>

          <p className="text-sm leading-relaxed text-white/40 font-light mb-10 line-clamp-3 italic">
            {shortDesc}
          </p>

          {/* Clean, Minimalist Navigation - Gold */}
          <div className="mt-auto flex items-center justify-between group/link">
            <span className="text-[10px] uppercase tracking-[0.3em] text-amber-400/60 group-hover/link:text-amber-400 transition-colors">
              View Capabilities
            </span>
            <div className="relative overflow-hidden w-5 h-5">
              <span className="absolute inset-0 text-amber-400 transition-transform duration-500 translate-x-0 group-hover/link:translate-x-6">
                →
              </span>
              <span className="absolute inset-0 text-amber-400 transition-transform duration-500 -translate-x-6 group-hover/link:translate-x-0">
                →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ServiceCard