import { motion } from 'framer-motion'
import { siteConfig } from '../config'

const WhatsAppButton = () => {
  // Updated message for Abuja property inquiries
  const message = encodeURIComponent("Hello, I would like to enquire about premium properties in Abuja.")
  const link = `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ 
        scale: 1.1, 
        backgroundColor: '#fbbf24', // amber-400
        color: '#0a1928' // dark blue
      }}
      className="fixed bottom-8 right-8 w-14 h-14 bg-[#0a1928]/90 backdrop-blur-md border border-amber-400/30 text-amber-400 rounded-full shadow-2xl z-50 flex items-center justify-center transition-colors duration-500"
      aria-label="Chat on WhatsApp"
    >
      {/* Refined minimalist chat icon */}
      <svg 
        className="w-6 h-6" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        strokeWidth="1.2"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" 
        />
      </svg>

      {/* Discreet notification dot - gold accent */}
      <span className="absolute top-0 right-0 flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-40"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400/60"></span>
      </span>
    </motion.a>
  )
}

export default WhatsAppButton