'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: ['Screen Printing', 'Laser Engraving', 'Large Format', 'Heat Press', 'Digital Printing'],
    Company: ['About Us', 'Portfolio', 'Blog', 'Careers', 'Contact'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer'],
  }

  return (
    <footer className="bg-black border-t border-border">
      {/* Main Footer Content */}
      <div className="px-4 md:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-playfair font-bold text-accent mb-4">
              DIMENSION OUTLOOK
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium branding and outdoor advertisement solutions that transform your vision.
            </p>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map((section, index) => (
            <motion.div
              key={section[0]}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-white mb-4">{section[0]}</h4>
              <ul className="space-y-3">
                {section[1].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-accent transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="h-px bg-border origin-left mb-8"
        />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 text-sm">
            © {currentYear} Dimension Outlook. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {['Twitter', 'Instagram', 'LinkedIn', 'Facebook'].map((social) => (
              <a
                key={social}
                href="https://web.facebook.com/DimensionOutlook"
                className="text-gray-500 hover:text-accent transition-colors text-sm"
              >
                {social}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
