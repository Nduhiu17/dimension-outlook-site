'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const services = [
  {
    title: 'Custom Signage',
    subtitle: 'Tailored Visual Solutions',
    image: '/signage/1.jpeg',
    description: 'Custom signage solutions for businesses and events with durable materials and vibrant designs'
  },
  {
    title: 'Screen Printing',
    subtitle: 'Premium Apparel Solutions',
    image: '/screen-print/2.jpeg',
    description: 'High-quality screen printing for apparel and promotional items with vibrant, long-lasting colors'
  },
  {
    title: 'Laser Engraving',
    subtitle: 'Precision Customization',
    image: '/laser-engraving/3.jpeg',
    description: 'Precision laser engraving on wood, acrylic, and metal with unmatched accuracy and detail'
  },
  {
    title: 'Digital Printing',
    subtitle: 'Advanced Technology',
    image: '/digital-printing/1.jpeg',
    description: 'State-of-the-art digital printing technology for vibrant, complex designs with quick turnaround'
  },
  {
    title: 'Heat Press',
    subtitle: 'Textile Excellence',
    image: '/heat-press/7.jpeg',
    description: 'Professional heat transfer printing for textiles with superior color quality and durability'
  },
  {
    title: 'Large Format',
    subtitle: 'Impactful Scale',
    image: '/large-format-printing/3.jpeg',
    description: 'Custom banners and large-scale print solutions perfect for signage and installations'
  },
  {
    title: 'CNC Cutting',
    subtitle: 'Engineered Precision',
    image: '/cnc-laser-cutting/6.jpeg',
    description: 'Precision cutting and engraving services with computer-controlled accuracy for complex designs'
  },
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)

  useEffect(() => {
    if (!isAutoplay) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length)
    }, 6000)
    
    return () => clearInterval(timer)
  }, [isAutoplay])

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index)
    setIsAutoplay(false)
    
    const resumeTimer = setTimeout(() => {
      setIsAutoplay(true)
    }, 10000)
    
    return () => clearTimeout(resumeTimer)
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: 'easeIn' },
    },
  }

  const subtitleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, delay: 0.15, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3, ease: 'easeIn' },
    },
  }

  const descriptionVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.3, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.3, ease: 'easeIn' },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.45, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-black">
      {/* Background Images Carousel */}
      <div className="absolute inset-0 z-0">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentIndex ? 1 : 0,
            }}
            transition={{
              opacity: { duration: 1.2, ease: 'easeInOut' },
            }}
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              priority={index === 0}
              quality={90}
            />
          </motion.div>
        ))}
      </div>

      {/* Advanced Gradient Overlay - creating visual depth */}
      <motion.div
        className="absolute inset-0 z-1"
        animate={{
          background: [
            'linear-gradient(135deg, rgba(10, 10, 10, 0.75) 0%, rgba(10, 10, 10, 0.6) 50%, rgba(10, 10, 10, 0.75) 100%)',
            'linear-gradient(135deg, rgba(10, 10, 10, 0.7) 0%, rgba(10, 10, 10, 0.65) 50%, rgba(10, 10, 10, 0.7) 100%)',
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Accent glow effect */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl z-0"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-4 md:px-8">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Pre-label */}
          <motion.div
            key={`label-${currentIndex}`}
            className="inline-block mb-8"
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <span className="text-accent text-xs md:text-sm font-mono font-semibold tracking-widest uppercase">
              ✦ Dimension Outlook Services
            </span>
          </motion.div>

          {/* Service Subtitle */}
          <motion.div
            key={`subtitle-${currentIndex}`}
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative h-12 mb-4 flex items-center justify-center overflow-hidden"
          >
            <span className="text-accent text-base md:text-lg font-light tracking-wide">
              {services[currentIndex].subtitle}
            </span>
          </motion.div>

          {/* Main Title */}
          <div className="relative overflow-hidden mb-6">
            <motion.h1
              key={`title-${currentIndex}`}
              className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white text-balance leading-tight"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {services[currentIndex].title}
            </motion.h1>
          </div>

          {/* Description */}
          <motion.div
            key={`desc-${currentIndex}`}
            className="relative h-20 flex items-center justify-center overflow-hidden mb-10"
          >
            <motion.p
              className="text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed"
              variants={descriptionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {services[currentIndex].description}
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            key={`buttons-${currentIndex}`}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            <Link
              href="#services"
              className="px-8 py-3 bg-accent text-black font-semibold rounded-lg transition-all duration-300 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/50 active:scale-95"
            >
              Explore Services
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg transition-all duration-300 hover:bg-accent hover:text-black active:scale-95"
            >
              Get in Touch
            </Link>
          </motion.div>

          {/* Service Navigation Dots */}
          <motion.div
            className="flex justify-center items-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {services.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleIndicatorClick(index)}
                className={`relative transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-10 h-2 bg-accent'
                    : 'w-2 h-2 bg-gray-600 hover:bg-gray-400'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Navigate to ${services[index].title}`}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Accent Line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-accent z-20"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 1 }}
        style={{ originX: 0 }}
      />

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="text-accent text-xs font-mono tracking-widest uppercase">
          Scroll to explore
        </div>
      </motion.div>
    </section>
  )
}
