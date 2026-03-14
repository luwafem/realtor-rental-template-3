export const siteConfig = {
  companyName: 'Earnest City',
  tagline: 'Your Trusted Real Estate Partner in Abuja',
  description: 'A premier real estate agency based in Abuja, specializing in the sale, rental, and management of residential and commercial properties across Maitama, Wuse, Asokoro, and beyond. We offer expert guidance to help you find your dream home or make profitable property investments.',
  phone: '+234 809 123 4567',
  whatsappNumber: '2348091234567',
  email: 'info@earnestcity.com.ng',
  logo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=200&auto=format&fit=crop', // Modern building facade

  hero: {
    title: 'Discover Your Perfect Property in Abuja',
    subtitle: 'Expert real estate services in Maitama, Wuse, and Asokoro. Buy, sell, or rent with confidence.',
    backgroundImage: 'https://images.trvl-media.com/place/275/1a6e2b92-7e9e-4609-ab6b-8a9011a046ad.jpg', // Abuja skyline / modern neighborhood
    ctaText: 'View Properties',
    ctaLink: '/properties'
  },

  services: [
    {
      id: 'property-sales',
      title: 'Property Sales',
      shortDesc: 'Find your ideal home or investment property in Abuja.',
      description: 'We offer a wide range of residential and commercial properties for sale in prime locations like Maitama, Asokoro, and Wuse. Our team guides you through every step of the purchasing process.',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2070&auto=format&fit=crop', // Beautiful house
      price: 'Negotiable',
      features: ['Wide Selection', 'Title Verification', 'Negotiation Support', 'Legal Assistance']
    },
    {
      id: 'rentals',
      title: 'Rental Services',
      shortDesc: 'Quality rental properties in Abuja’s most desirable neighborhoods.',
      description: 'Whether you need a short-term apartment in Wuse or a long-term family home in Asokoro, we have verified rental options to suit your budget and preferences.',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2070&auto=format&fit=crop', // Modern apartment interior
      price: 'Market Rates',
      features: ['Flexible Terms', 'Maintenance Support', 'Tenant Screening', 'Lease Management']
    },
    {
      id: 'property-management',
      title: 'Property Management',
      shortDesc: 'Hassle-free management for landlords in Abuja.',
      description: 'Let us handle your property worries. From tenant sourcing to rent collection and maintenance, we ensure your investment is well taken care of.',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2070&auto=format&fit=crop', // Office building
      price: 'Competitive Rates',
      features: ['Tenant Sourcing', 'Rent Collection', 'Maintenance Coordination', 'Regular Inspections']
    }
  ],

  testimonials: [
    {
      id: 1,
      name: 'Dr. Ngozi Okonkwo',
      role: 'Home Buyer',
      content: 'Earnest City Property made my first home purchase in Maitama seamless and stress-free. Their knowledge of the local market is unmatched.',
      rating: 5
    },
    {
      id: 2,
      name: 'Alhaji Sani Mohammed',
      role: 'Landlord',
      content: 'I have trusted them with managing my properties in Wuse for over two years. Professional, reliable, and always responsive.',
      rating: 5
    },
    {
      id: 3,
      name: 'Barr. Chinedu Okafor',
      role: 'Investor',
      content: 'They helped me acquire a prime commercial plot in Asokoro. Excellent negotiation and due diligence.',
      rating: 5
    }
  ],

  social: {
    instagram: 'https://instagram.com/earnestcityproperty',
    facebook: 'https://facebook.com/earnestcityproperty',
    twitter: 'https://twitter.com/earnestcityprop',
  },

  properties: [
    {
      id: 'maitama-5bedroom-detached',
      name: 'Luxury 5-Bedroom Detached Duplex',
      type: 'Residential',
      bedrooms: 5,
      bathrooms: 6,
      area: '600 sqm',
      location: 'Maitama, Abuja',
      price: '₦350,000,000',
      features: ['Modern Finishes', 'Boys Quarters', 'Parking for 4 Cars', 'Fenced Yard', '24hr Security'],
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop', // Modern duplex
      description: 'A stunning detached duplex in a serene neighborhood of Maitama. Features spacious living areas, en-suite bedrooms, and a well-equipped kitchen. Close to embassies, schools, and shopping centers.'
    },
    {
      id: 'asokoro-commercial-land',
      name: 'Prime Commercial Land',
      type: 'Land',
      bedrooms: 0,
      bathrooms: 0,
      area: '800 sqm',
      location: 'Asokoro, Abuja',
      price: '₦250,000,000',
      features: ['High Traffic', 'Ready for Development', 'All Documents Verified', 'Corner Plot'],
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop', // Commercial plot
      description: 'Excellent location in the heart of Asokoro, perfect for retail, office, or mixed-use development. With all necessary approvals in place.'
    },
    {
      id: 'wuse-3bedroom-apartment',
      name: 'Spacious 3-Bedroom Apartment',
      type: 'Residential',
      bedrooms: 3,
      bathrooms: 3,
      area: '220 sqm',
      location: 'Wuse 2, Abuja',
      price: '₦95,000,000',
      features: ['Large Compound', 'POP Ceilings', 'Tiled Floors', 'Borehole', 'Estate Security'],
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2070&auto=format&fit=crop', // Bungalow/Apartment
      description: 'Ideal for a growing family. This apartment offers generous living space, a well-maintained garden, and proximity to schools and markets.'
    },
    {
      id: 'katampe-4bedroom-terrace',
      name: 'Contemporary 4-Bedroom Terrace Duplex',
      type: 'Residential',
      bedrooms: 4,
      bathrooms: 4,
      area: '400 sqm',
      location: 'Katampe Extension, Abuja',
      price: '₦180,000,000',
      features: ['Swimming Pool', 'Smart Home System', 'Staff Quarters', 'Landscaped Garden', '24hr Security'],
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop', // Luxury mansion
      description: 'A masterpiece of contemporary design in the exclusive Katampe Extension. This home features a private swimming pool, state‑of‑the‑art smart home technology, lush gardens, and premium finishes throughout. Perfect for discerning buyers seeking ultimate luxury.'
    },
    {
      id: 'garki-2bedroom-flat',
      name: 'Modern 2-Bedroom Flat',
      type: 'Residential',
      bedrooms: 2,
      bathrooms: 2,
      area: '130 sqm',
      location: 'Garki, Abuja',
      price: '₦50,000,000',
      features: ['Fully Fitted Kitchen', 'Balcony', 'Tiled Floors', 'Estate Security', 'Prepaid Meter'],
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop', // Modern apartment interior
      description: 'A stylish and functional flat perfect for young professionals or small families. Located in a well‑managed estate with reliable security, close to major shopping centers and public transport.'
    },
    {
      id: 'jabi-luxury-penthouse',
      name: 'Luxury Penthouse with Lake View',
      type: 'Residential',
      bedrooms: 4,
      bathrooms: 5,
      area: '420 sqm',
      location: 'Jabi, Abuja',
      price: '₦280,000,000',
      features: ['Private Rooftop Terrace', 'Jacuzzi', 'Panoramic Views', 'Concierge Service', 'Private Lift'],
      image: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=2070&auto=format&fit=crop', // Penthouse
      description: 'Experience the pinnacle of urban living in this breathtaking penthouse overlooking Jabi Lake. With a private rooftop terrace, jacuzzi, and world‑class finishes, it offers an unmatched lifestyle in the heart of Abuja.'
    },
    {
      id: 'wuse-shop-house',
      name: 'Shop House (Commercial + Residential)',
      type: 'Commercial',
      bedrooms: 2,
      bathrooms: 2,
      area: '280 sqm',
      location: 'Wuse, Abuja',
      price: '₦140,000,000',
      features: ['Ground Floor Shop', 'Upstairs Living Quarters', 'High Foot Traffic', 'Parking Space'],
      image: 'https://images.unsplash.com/photo-1572025442646-866d16c84a54?q=80&w=2070&auto=format&fit=crop', // Shop house
      description: 'A versatile property combining retail space on the ground floor with comfortable living quarters upstairs. Ideal for entrepreneurs who want to live and work in the same prime location. Situated on a busy street with excellent visibility.'
    },
    {
      id: 'kubwa-land',
      name: 'Residential Land for Development',
      type: 'Land',
      bedrooms: 0,
      bathrooms: 0,
      area: '600 sqm',
      location: 'Kubwa, Abuja',
      price: '₦30,000,000',
      features: ['Fenced', 'Survey Approved', 'Dry Land', 'Close to Amenities'],
      image: 'https://images.unsplash.com/photo-1582408921715-4e2b2b1e4c6d?q=80&w=2070&auto=format&fit=crop', // Land plot
      description: 'A prime piece of land in the rapidly developing Kubwa area. Perfect for building a family home or small residential development. All documents are verified and ready for transfer.'
    },
    {
      id: 'asokoro-5bedroom-duplex-pool',
      name: '5-Bedroom Duplex with Pool',
      type: 'Residential',
      bedrooms: 5,
      bathrooms: 5,
      area: '550 sqm',
      location: 'Asokoro, Abuja',
      price: '₦420,000,000',
      features: ['Swimming Pool', 'Modern Kitchen', 'Play Area', 'Ample Parking', '24hr Power Supply'],
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop', // House with pool
      description: 'A stunning family home in a quiet cul de sac of Asokoro. Features include a large swimming pool, a modern open‑plan living area, a fully equipped kitchen, and a secure compound. Perfect for entertaining and comfortable family living.'
    }
  ],

  formspreeEndpoint: 'https://formspree.io/f/your-form-id',

  meta: {
    title: 'Earnest City Property Limited | Real Estate Agent in Abuja (Maitama, Wuse, Asokoro)',
    description: 'Earnest City Property Limited offers professional real estate services in Abuja. Buy, sell, or rent properties in Maitama, Wuse, Asokoro, and beyond with a trusted local agent.',
    ogImage: 'https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?q=80&w=1200&auto=format&fit=crop',
    url: 'https://earnestcityproperty.com.ng',
    twitterHandle: '@earnestcityprop'
  }
};