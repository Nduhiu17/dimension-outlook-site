'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-border">
      <div className="px-4 md:px-8 lg:px-16 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="h-10 w-auto"
          >
            <Image 
              src="/logo.jpeg" 
              alt="Dimension Outlook"
              width={120}
              height={40}
              priority
              quality={85}
              className="h-10 w-auto"
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-sm font-medium text-gray-300 hover:text-accent transition-colors"
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden md:block btn-primary text-sm"
        >
          Get Started
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative w-6 h-6 flex flex-col justify-center items-center gap-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <motion.div
            animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-5 h-0.5 bg-accent"
          />
          <motion.div
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-5 h-0.5 bg-accent"
          />
          <motion.div
            animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-5 h-0.5 bg-accent"
          />
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-black border-b border-border md:hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-300 hover:text-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="btn-primary text-sm text-center">
                Get Started
              </a>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  )
}
