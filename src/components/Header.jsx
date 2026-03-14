import { Link, useLocation } from 'react-router-dom'
import { siteConfig } from '../config'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0a1928]/90 backdrop-blur-xl py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="group flex items-center space-x-3">
          <img src={siteConfig.logo} alt={siteConfig.companyName} className="h-8 md:h-9 w-auto brightness-0 invert" />
          <div className="flex flex-col">
            <span className="text-lg font-extralight tracking-[0.3em] uppercase text-white leading-none">
              {siteConfig.companyName}
            </span>
            <span className="text-[7px] tracking-[0.5em] uppercase text-amber-400/40 mt-1.5 font-bold">
              Maitama • Wuse • Asokoro • Abuja
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`text-[10px] uppercase tracking-[0.25em] transition-all duration-300 font-medium ${
                location.pathname === link.path 
                  ? 'text-amber-400 border-b border-amber-400/40 pb-1' 
                  : 'text-white/50 hover:text-amber-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="px-8 py-2.5 border border-amber-400/30 rounded-full text-[9px] uppercase tracking-[0.3em] bg-amber-400 text-[#0a1928] hover:bg-transparent hover:text-amber-400 hover:border-amber-400 transition-all duration-500 font-bold"
          >
            Enquire
          </Link>
        </nav>

        {/* Mobile Menu Trigger */}
        <button 
          className="md:hidden relative z-50 p-2 text-white" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex flex-col gap-2 w-6">
            <span className={`h-[1px] w-full bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
            <span className={`h-[1px] w-full bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'tween', duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-[#0a1928] z-40 md:hidden flex flex-col justify-center px-12"
          >
            <nav className="flex flex-col space-y-10">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  key={link.path}
                >
                  <Link 
                    to={link.path} 
                    onClick={() => setIsOpen(false)}
                    className="text-5xl font-extralight tracking-tighter text-white italic hover:text-amber-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <div className="mt-20 pt-10 border-t border-amber-400/20">
              <p className="text-[10px] tracking-[0.4em] uppercase text-amber-400/60 mb-6 font-bold">Contact Our Team</p>
              <p className="text-xl text-white font-light tracking-widest">{siteConfig.phone}</p>
              <div className="mt-8 flex gap-6">
                <span className="text-[10px] uppercase tracking-widest text-amber-400/40">Maitama</span>
                <span className="text-[10px] uppercase tracking-widest text-amber-400/40">Wuse</span>
                <span className="text-[10px] uppercase tracking-widest text-amber-400/40">Asokoro</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header