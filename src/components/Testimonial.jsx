import { motion } from 'framer-motion'

const Testimonial = ({ testimonial }) => {
  const { name, role, content, rating } = testimonial

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative p-10 lg:p-14 bg-[#0f1f2f] border border-amber-400/20 rounded-3xl flex flex-col items-center text-center"
    >
      {/* Subtle Quote Icon - can be added later if needed */}

      {/* Modern Rating - Minimalist Dots */}
      <div className="flex gap-1.5 mb-8 relative z-10">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className={`w-1 h-1 rounded-full ${i < rating ? 'bg-amber-400' : 'bg-amber-400/10'}`} 
          />
        ))}
      </div>

      <blockquote className="relative z-10 mb-10">
        <p className="text-lg md:text-xl font-extralight leading-relaxed text-white/80 italic tracking-wide">
          {content}
        </p>
      </blockquote>

      <div className="mt-auto">
        <p className="text-[11px] uppercase tracking-[0.4em] text-amber-400 mb-2 font-bold">
          {name}
        </p>
        <div className="flex items-center justify-center gap-3">
          <span className="h-[1px] w-4 bg-amber-400/20" />
          <p className="text-[10px] uppercase tracking-[0.2em] text-amber-400/40 italic">
            {role}
          </p>
          <span className="h-[1px] w-4 bg-amber-400/20" />
        </div>
      </div>
    </motion.div>
  )
}

export default Testimonial