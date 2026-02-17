'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Format the message for WhatsApp
    const formattedMessage = `*New Contact Form Submission*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Service:* ${formData.service}\n*Message:* ${formData.message}`
    
    // Create WhatsApp URL
    const phoneNumber = "+254717388209"
    const encodedMessage = encodeURIComponent(formattedMessage)
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodedMessage}`
    
    // Open WhatsApp
    window.open(whatsappUrl, "_blank")
    
    // Show success message
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', service: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    { icon: '📍', label: 'Address', value: 'Nairobi, Kenya' },
    { icon: '📧', label: 'Email', value: 'info@dynamicoutlook.com' },
    { icon: '📱', label: 'Phone', value: '+254717388209' },
    { icon: '🕐', label: 'Hours', value: 'Mon-Fri: 9AM-6PM, Sat: 10AM-4PM' },
  ]

  return (
    <section id="contact" className="section-container bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: '-100px' }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
          Get In
          <span className="text-accent"> Touch</span>
        </h2>
        <p className="text-gray-400 text-lg">
          Let's discuss your next project and how we can help elevate your brand
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-400 text-sm mb-2">{info.label}</p>
                <p className="text-white text-lg font-semibold">{info.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-10 pt-8 border-t border-border"
          >
            <p className="text-gray-400 text-sm mb-4">Follow Us</p>
            <div className="flex gap-4">
              {['Instagram', 'Facebook', 'LinkedIn', 'Twitter'].map((social) => (
                <motion.a
                  key={social}
                  href={`https://web.${social.toLowerCase()}.com/DimensionOutlook`}
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-lg bg-secondary text-accent flex items-center justify-center hover:bg-accent hover:text-black transition-colors"
                >
                  {social[0]}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="lg:col-span-2 space-y-6"
        >
          {/* Name Input */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              placeholder="Your name"
            />
          </motion.div>

          {/* Email Input */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              placeholder="your@email.com"
            />
          </motion.div>

          {/* Service Select */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Service Interest
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            >
              <option value="">Select a service</option>
              <option value="screen-printing">Screen Printing</option>
              <option value="laser-engraving">Laser Engraving</option>
              <option value="large-format">Large Format Printing</option>
              <option value="heat-press">Heat Press</option>
              <option value="digital-printing">Digital Printing</option>
              <option value="cnc-laser-cutting">CNC & Laser Cutting</option>
            </select>
          </motion.div>

          {/* Message Textarea */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
              placeholder="Tell us about your project..."
            />
          </motion.div>

          {/* Submit Button */}
          {/* Should send the form data to whatsapp */}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full btn-primary relative overflow-hidden"
          >
            {submitted ? (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                Message Sent! ✓
              </motion.span>
            ) : (
              'Send Message'
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
