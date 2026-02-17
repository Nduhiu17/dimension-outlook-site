'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const services = [
  {
    id: 1,
    title: 'Screen Printing',
    description: 'High-quality screen printing for apparel and promotional items',
    image: '/screen-print/1.jpeg',
    images: ['/screen-print/1.jpeg', '/screen-print/2.jpeg', '/screen-print/3.jpeg'],
  },
  {
    id: 2,
    title: 'Laser Engraving',
    description: 'Precision laser engraving on wood, acrylic, and metal',
    image: '/laser-engraving/4.jpeg',
    images: ['/laser-engraving/1.jpeg', '/laser-engraving/2.jpeg', '/laser-engraving/3.jpeg', '/laser-engraving/4.jpeg','/laser-engraving/5.jpeg', '/laser-engraving/6.jpeg', '/laser-engraving/7.jpeg', '/laser-engraving/8.jpeg', '/laser-engraving/9.jpeg', '/laser-engraving/10.jpeg'],
  },
  {
    id: 3,
    title: 'Large Format Printing',
    description: 'Custom banners, posters, and large-scale print solutions',
    image: '/large-format-printing/1.jpeg',
    images: ['/large-format-printing/1.jpeg', '/large-format-printing/2.jpeg', '/large-format-printing/3.jpeg'],
  },
  {
    id: 4,
    title: 'Heat Press',
    description: 'Professional heat transfer printing for textiles',
    image: '/heat-press/1.jpeg',
    images: ['/heat-press/1.jpeg', '/heat-press/2.jpeg', '/heat-press/3.jpeg'],
  },
  {
    id: 5,
    title: 'Digital Printing',
    description: 'State-of-the-art digital printing technology',
    image: '/digital-printing/1.jpeg',
    images: ['/digital-printing/1.jpeg', '/digital-printing/2.jpeg', '/digital-printing/3.jpeg'],
  },
  {
    id: 6,
    title: 'CNC & Laser Cutting',
    description: 'Precision cutting and engraving services',
    image: '/cnc-laser-cutting/1.jpeg',
    images: ['/cnc-laser-cutting/1.jpeg', '/cnc-laser-cutting/2.jpeg', '/cnc-laser-cutting/3.jpeg'],
  },
]

export default function Services() {
  return (
    <section id="services" className="section-container bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Our
            <span className="text-accent"> Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Comprehensive solutions for all your branding and advertising needs
          </p>
        </div>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: '-50px' }}
            className="group relative overflow-hidden rounded-lg"
          >
            {/* Card */}
            <div className="service-card">
              {/* Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="img-fill-responsive group-hover:scale-105 transition-transform duration-500"
                quality={80}
                placeholder="empty"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <h3 className="text-lg sm:text-2xl font-playfair font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-200 text-xs sm:text-sm mb-4">
                  {service.description}
                </p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="w-fit text-accent font-semibold text-xs sm:text-sm flex items-center gap-2"
                >
                  Learn More →
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
