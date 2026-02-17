'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '15+', label: 'Years Experience' },
  { number: '200+', label: 'Happy Clients' },
  { number: '24/7', label: 'Support' },
]

export default function About() {
  return (
    <section id="about" className="section-container bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="mb-6">
            <span className="text-accent text-sm font-semibold tracking-widest">ABOUT US</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Transforming
            <span className="text-accent"> Ideas</span>
            Into Impactful Campaigns
          </h2>

          <p className="text-gray-400 text-lg mb-6 leading-relaxed">
            Dimension Outlook is a leading provider of innovative branding and outdoor advertising solutions. With over a decade of industry experience, we've helped hundreds of businesses elevate their brand presence through cutting-edge printing and engraving technologies.
          </p>

          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Our state-of-the-art equipment and creative team work together to deliver exceptional results that exceed expectations. From concept to completion, we're committed to bringing your vision to life.
          </p>

          {/* CTA */}
          <motion.a
            href="#contact"
            whileHover={{ x: 5 }}
            className="inline-block btn-primary"
          >
            Start Your Project
          </motion.a>
        </motion.div>

        {/* Image and Stats */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="relative"
        >
          {/* Featured Image */}
          <div className="relative h-96 md:h-full rounded-lg overflow-hidden mb-8 border border-border">
            <Image
              src="/digital-printing/3.jpeg"
              alt="Dynamic Outlook Team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary rounded-lg p-4 border border-border"
              >
                <div className="text-3xl font-playfair font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
