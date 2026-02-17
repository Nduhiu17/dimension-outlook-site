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
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  )
}
