'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const portfolioItems = [
  { id: 1, title: 'Retail Signage', category: 'Signage', image: '/signage/1.jpeg' },
  { id: 2, title: 'Screen Print Apparel', category: 'Screen Printing', image: '/screen-print/5.jpeg' },
  { id: 3, title: 'Screen Print Apparel', category: 'Screen Printing', image: '/screen-print/2.jpeg' },
  { id: 4, title: 'Laser Engraved Awards', category: 'Laser Engraving', image: '/laser-engraving/4.jpeg' },
  { id: 5, title: 'Billboard Design', category: 'Large Format', image: '/large-format-printing/5.jpeg' },
  { id: 6, title: 'Heat Transfer Design', category: 'Heat Press', image: '/heat-press/4.jpeg' },
  { id: 7, title: 'Digital Print Campaign', category: 'Digital Printing', image: '/digital-printing/6.jpeg' },
  { id: 8, title: 'Custom Wood Signs', category: 'CNC Laser Cutting', image: '/cnc-laser-cutting/3.jpeg' },
  { id: 9, title: 'Promotional Materials', category: 'Screen Printing', image: '/screen-print/8.jpeg' },
  { id: 10, title: 'Custom Wood Signs', category: 'CNC Laser Cutting', image: '/cnc-laser-cutting/6.jpeg' },
  { id: 11, title: 'Billboard Design', category: 'Large Format', image: '/large-format-printing/1.jpeg' },
]

const categories = ['All', 'Signage', 'Screen Printing', 'Laser Engraving', 'Large Format', 'Heat Press', 'Digital Printing', 'CNC Laser Cutting']

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <section id="portfolio" className="section-container bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: '-100px' }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
          Featured
          <span className="text-accent"> Portfolio</span>
        </h2>
        <p className="text-gray-400 text-lg">
          Showcase of our finest work and successful projects
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-3 mb-12 overflow-x-auto pb-4"
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-full font-medium text-sm transition-all whitespace-nowrap ${
              activeCategory === category
                ? 'bg-accent text-black'
                : 'bg-secondary text-gray-300 hover:bg-border'
            }`}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Portfolio Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
      >
        {filtered.map((item, index) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true, margin: '-50px' }}
            className="group relative overflow-hidden rounded-lg h-64 md:h-72 cursor-pointer"
          >
            {/* Image */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-end justify-start p-6 transition-all duration-300"
            >
              <div>
                <p className="text-accent text-sm font-semibold mb-2">{item.category}</p>
                <h3 className="text-white text-lg font-playfair font-bold">{item.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
