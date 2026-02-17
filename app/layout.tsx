import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dimension Outlook - Branding & Outdoor Advertisement',
  description: 'Cutting-edge branding and outdoor advertisement solutions. Screen printing, laser engraving, digital printing, and more.',
  keywords: ['branding', 'advertisement', 'printing', 'signage', 'design', 'outdoor'],
  openGraph: {
    title: 'Dimension Outlook - Branding & Outdoor Advertisement',
    description: 'Premium branding and outdoor advertisement services',
    type: 'website',
  },
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any' }],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#1a1a1a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preload critical fonts */}
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600&display=swap" />
        {/* Preload critical images */}
        <link rel="preload" as="image" href="/signage/1.jpeg" type="image/jpeg" />
      </head>
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  )
}
